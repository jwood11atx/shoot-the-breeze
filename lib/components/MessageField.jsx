import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import moment from 'moment';

export default class MessageField extends Component {

  render() {
    return (
      <div>
        { this.props.messages.map(
          m => <li
            key={m.key}>{m.createdAt} {m.user.displayName}: {m.content}
          </li>)
        }
      </div>
    );
  }
}
