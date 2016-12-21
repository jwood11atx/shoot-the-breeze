import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class MessageInput extends Component {

  userCheck(user){
    const { draftMessage, handleChange, addNewMessage, app } = this.props;
    let msgInput;

    if(user){
      msgInput =
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
          }}/>;
    } else {
      msgInput = <div></div>
    }
    return msgInput;
  }

  render() {
    const { user } = this.props;
    return (
      this.userCheck(user)
    );
  }
}
