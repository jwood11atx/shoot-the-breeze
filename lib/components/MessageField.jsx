import React, { Component } from 'react';
import moment from 'moment';

export default class MessageField extends Component {

  render() {
    const { messages, filteredMessages, user, reverseSort, draftMessage } = this.props;
    let messageField;
    if (filteredMessages.length && !reverseSort) {
      messageField = (
        <ul >{filteredMessages.map(m =>
          <li key={m.key}>
            <span>{m.createdAt}</span>
            <span>{m.user.displayName.split(' ').shift()}</span>
            <p>{m.content}</p>
          </li>).reverse()}
        </ul>);
    } else if (filteredMessages.length) {
      messageField = (
        <ul >{filteredMessages.map(m =>
          <li key={m.key}>
            <span>{m.createdAt}</span>
            <span>{m.user.displayName.split(' ').shift()}</span>
            <p>{m.content}</p>
          </li>)}
        </ul>);
    } else if (!reverseSort) {
      messageField = (
        <ul >{messages.map(m =>
          <li key={m.key}>
            <span>{m.createdAt}</span>
            <span>{m.user.displayName.split(' ').shift()}</span>
            <p>{m.content}</p>
          </li>).reverse()}
        </ul>);
    } else {
      messageField = (
        <ul >{messages.map(m =>
          <li key={m.key}>
            <span>{m.createdAt}</span>
            <span>{m.user.displayName.split(' ').shift()}</span>
            <p>{m.content}</p>
          </li>)}
        </ul>);
    }

    return (
      <div>
        {messageField}
      </div>
    );
  }
}
