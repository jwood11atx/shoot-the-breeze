import React, { Component } from 'react';
import moment from 'moment';

export default class MessageField extends Component {
  messagesCheck() {
    const { messages, filteredMessages, user, reverseSort, draftMessage } = this.props;

    let messageField;
    if(messages){
      if (filteredMessages.length && !reverseSort) {
        messageField = (
          <ul >{filteredMessages.map(m =>
            <li key={m.key}>
              <span className="created-at">{m.createdAt}</span>
              <span className="user-name">{m.user.displayName.split(' ').shift()}</span>
              <p className="chat-message">{m.content}</p>
              <br/>
            </li>)}
          </ul>);
      } else if (filteredMessages.length) {
        messageField = (
          <ul >{filteredMessages.map(m =>
            <li key={m.key}>
              <span className="created-at">{m.createdAt}</span>
              <span className="user-name">{m.user.displayName.split(' ').shift()}</span>
              <p className="chat-message">{m.content}</p>
              <br/>
            </li>).reverse()}
          </ul>);
      } else if (!reverseSort) {
        messageField = (
          <ul >{messages.map(m =>
            <li key={m.key}>
              <span className="created-at">{m.createdAt}</span>
              <span className="user-name">{m.user.displayName.split(' ').shift()}</span>
              <p className="chat-message">{m.content}</p>
              <br/>
            </li>)}
          </ul>);
      } else {
        messageField = (
          <ul >{messages.map(m =>
            <li key={m.key}>
              <span className="created-at">{m.createdAt}</span>
              <span className="user-name">{m.user.displayName.split(' ').shift()}</span>
              <p className="chat-message">{m.content}</p>
              <br/>
            </li>).reverse()}
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
