import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class SignIn extends Component {

  render() {
    let { messages } = props;
    return (
      <div>
        { props.messages.map(
          m => <li
            key={m.key}>{m.user.displayName}: {m.content}
          </li>)
        }
      </div>
    );
  }
}
