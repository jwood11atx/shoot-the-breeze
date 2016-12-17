import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend, filter, includes } from 'lodash';
import SignIn from './SignIn';
import MessageInput from './MessageInput';
import MessageField from './MessageField';
import CharCounter from './CharCounter';
import Buttons from './Buttons';
import Users from './Users';

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
      createdAt: Date.now(),
    });

    this.setState({ draftMessage: '' });
  }

  deleteMessage() {
    this.setState({ draftMessage: '' });
  }

  filterByUser(userName) {
    let filteredMessages = filter(this.state.messages, (m) => {
      return m.user.displayName.includes(userName);
    });
    this.setState({ filteredMessages: filteredMessages });
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <SignIn user={this.state.user} />
        <ul>
          <MessageField messages={this.state.messages} />
        </ul>
        <Users
          user={this.state.user}
          filteredMessages={this.state.filteredMessages}
          messages={this.state.messages}
          filterByUser={this.filterByUser.bind(this)}
        />
        <CharCounter draftMessage={this.state.draftMessage} />
        <MessageInput
          handleChange={this.inputNewMessage.bind(this)}
          draftMessage={this.state.draftMessage}
        />
        <Buttons
          draftMessage={this.state.draftMessage}
          addMessage={this.addNewMessage.bind(this)}
          deleteMessage={this.deleteMessage.bind(this)}
        />
      </div>
    );
  }
}
