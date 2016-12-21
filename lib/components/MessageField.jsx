import React, { Component } from 'react';
import moment from 'moment';

export default class MessageField extends Component {

  chatMessage(m) {
    return (
      <li key={m.key}>
        <span className="created-at">{m.createdAt}</span>
        <span className="user-name">{m.user.displayName.split(' ').shift()}</span>
        <p className="chat-message">{m.content}</p>
        <br/>
      </li>
    );
  }

  messagesCheck() {
    const { messages, filteredMessages, user, reverseSort, draftMessage } = this.props;

    let messageField;
    if(messages){
      if (filteredMessages.length && !reverseSort) {
        messageField = (
          <ul >{filteredMessages.map(m =>
            this.chatMessage(m))}
          </ul>);
      } else if (filteredMessages.length) {
        messageField = (
          <ul >{filteredMessages.map(m =>
            this.chatMessage(m)).reverse()}
          </ul>);
      } else if (!reverseSort) {
        messageField = (
          <ul >{messages.map(m =>
            this.chatMessage(m))}
          </ul>);
      } else {
        messageField = (
          <ul >{messages.map(m =>
            this.chatMessage(m)).reverse()}
          </ul>);
      }
      return messageField;
    }
  }

  render() {
    return (
      <div className="message-field">
        {this.messagesCheck()}
      </div>
    );
  }
}
