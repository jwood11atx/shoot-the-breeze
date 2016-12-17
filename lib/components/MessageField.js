import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class MessageField extends Component {

  render() {
    let { messages } = this.props;

    return (
      <div>
        { messages.map(
          m => <li
            key={m.key}>{m.user.displayName}: {m.content}
          </li>)
        }
      </div>
    );
  }
}
