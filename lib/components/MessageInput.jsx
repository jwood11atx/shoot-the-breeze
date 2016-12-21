import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class MessageInput extends Component {

  render() {
    const { draftMessage, handleChange, addNewMessage, app } = this.props;
    return (
      <input
        ref="msgInputfield"
        className="message-input"
        placeholder="Message…"
        value={draftMessage}
        maxLength='140'
        onChange={e => handleChange(e)}
        onKeyDown={(e) => {
          if(e.keyCode === 13)
            addNewMessage(app)
        }}/>
    );
  }
}
