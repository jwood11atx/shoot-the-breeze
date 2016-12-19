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
// Very few things in this component are a good idea.
// Feel free to blow it all away.

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
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  inputNewMessage(e) {
    this.setState({ draftMessage: e.target.value });
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format("MMMM D, hh:mm "),
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
    this.setState({ filteredMessages: filteredMessages });
  }

  sortMessages(order) {
    // order === 'up' ? this.setState({reverseSort: true}) : this.setState({reverseSort: false});
    console.log('hi');
  }

  searchMessages(e) {
    const searchField = e.target.value.toLowerCase();

    const filteredMessages = filter(this.state.messages, (m) => {
      return m.content.toLowerCase().includes(searchField);
    });
    this.setState({ filteredMessages : filteredMessages })
    this.setState({ searchField: searchField });
  }

  render() {
    const { user, messages, draftMessage, filteredMessages, searchField, reverseSort } = this.state;

    return (
      <div className="Application">
        <header>
          <SignIn user={user} />
          <SearchInput
            searchMessages={this.searchMessages.bind(this)}
            // searchField={searchField} I don't think this is used
          />
          <Sort sort={this.sortMessages.bind(this)} />
        </header>
        <ul>
          <MessageField messages={messages} />
        </ul>
        <ul>
          <Users
            user={user}
            filteredMessages={filteredMessages}
            messages={messages}
            filterByUser={this.filterByUser.bind(this)}
          />
        </ul>
        <footer>
          <MessageInput
            handleChange={this.inputNewMessage.bind(this)}
            draftMessage={draftMessage}
          />
          <CharCounter draftMessage={draftMessage} />
          <Buttons
            draftMessage={draftMessage}
            addMessage={this.addNewMessage.bind(this)}
            deleteMessage={this.deleteMessage.bind(this)}
          />
        </footer>
      </div>
    );
  }
}
