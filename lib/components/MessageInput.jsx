import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class MessageInput extends Component {

  render() {
    const { draftMessage, handleChange } = this.props;
    return (
      <div >
        <input
          ref="msgInputfield"
          className="MessageInput"
          placeholder="Message…"
          value={draftMessage}
          onChange={e => handleChange(e)}
        />
        {/* <button
          type = 'button'
          disabled = { !this.props.draftMessage.length || (this.props.draftMessage.length >= 140) }
          onClick={() => this.props.handleClick()}>Add New Message</button> */}

      </div>
    );
  }
}