import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import moment from 'moment';

export default class MessageField extends Component {
  messagesCheck() {
    let messageArray = [];
    if(this.props.messages) {
      this.props.messages.map(m =>
      messageArray.push(<li key={m.key}>
        {m.createdAt} {m.user.displayName}: {m.content}
      </li>)
    )}
    return messageArray;
  }

  render() {
    return (
      <div>
        {this.messagesCheck()}
      </div>
    );
  }
}
