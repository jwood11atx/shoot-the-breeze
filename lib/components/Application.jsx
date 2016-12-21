import React, { Component } from 'react';
import moment from 'moment';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend, filter, includes } from 'lodash';
import SignIn from './SignIn';
import MessageInput from './MessageInput';
import MessageField from './MessageField';
import CharCounter from './CharCounter';
import Buttons from './Buttons';
import Users from './Users';
import SearchInput from './SearchInput';
import Sort from './Sort';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      filteredMessages: [],
      draftMessage: '',
      user: null,
      searchField: '',
      reverseSort: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
    this.pullChatHistory(this);
  }

  pullChatHistory(selector){
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      selector.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      }, () => this.scrollDown());
    });  }

  inputNewMessage(e) {
    this.setState({ draftMessage: e.target.value });
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM D, hh:mm '),
    });

    this.setState({ draftMessage: '' });
  }

  deleteMessage() {
    this.setState({ draftMessage: '' });
  }

  filterByUser(userName) {
    const filteredMessages = filter(this.state.messages, (m) => {
      return m.user.displayName.includes(userName);
    });
    this.setState({ filteredMessages });
  }

  sortMessages(order) {
    order === 'up' ? this.setState({ reverseSort: true }) : this.setState({ reverseSort: false });
  }

  searchMessages(e) {
    const searchField = e.target.value.toLowerCase();

    const filteredMessages = filter(this.state.messages, (m) => {
      return m.content.toLowerCase().includes(searchField);
    });
    this.setState({ filteredMessages });
    this.setState({ searchField });
  }

  scrollDown(){
    window.scrollBy(0, document.querySelector(".message-field").scrollHeight);
  }

  render() {
    const { user, messages, draftMessage, filteredMessages, searchField, reverseSort } = this.state;

    return (
      <div className="Application">
        <header className="header">
          <span className="title">Shoot the Breeze</span>
          <SearchInput
            searchMessages={this.searchMessages.bind(this)}
          />
          <Sort sort={this.sortMessages.bind(this)} />
        </header>
        <section className="main-body">
          <article className="message-field-container">
            <MessageField
              messages={messages}
              filteredMessages={filteredMessages}
              user={user}
              reverseSort={reverseSort}
              draftMessage={draftMessage}
            />
          </article>
          <article className="user-list-container">
            <Users
              user={user}
              filteredMessages={filteredMessages}
              messages={messages}
              filterByUser={this.filterByUser.bind(this)}
            />
          </article>
        </section>
        <footer className="footer">
          <section className="login-section">
            <SignIn user={user}
                    pullChatHistory={this.pullChatHistory.bind(this)}
                    app={this}/>
          </section>
          <section className="input-section">
            <MessageInput
              handleChange={this.inputNewMessage.bind(this)}
              draftMessage={draftMessage}
              app={this}
              addNewMessage={this.addNewMessage.bind(this)}
            />
            <CharCounter draftMessage={draftMessage} />
            <Buttons
              draftMessage={draftMessage}
              addMessage={this.addNewMessage.bind(this)}
              deleteMessage={this.deleteMessage.bind(this)}
            />
          </section>
        </footer>
      </div>
    );
  }
}
