import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import SignIn from './SignIn';
import MessageInput from './MessageInput';
import MessageField from './MessageField';
import CharCounter from './CharCounter';
import Buttons from './Buttons';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
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

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <SignIn user={this.state.user} />
        <ul>
          <MessageField messages={this.state.messages} />
        </ul>
        <CharCounter draftMessage={this.state.draftMessage} />
        <MessageInput
          handleChange={this.inputNewMessage.bind(this)}
        />
        <Buttons
          draftMessage={this.state.draftMessage}
          handleClick={this.addNewMessage.bind(this)}
        />
      </div>
    );
  }
}
