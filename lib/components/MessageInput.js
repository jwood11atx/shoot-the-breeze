import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class MessageInput extends Component {

  render() {
    const { draftMessage, handleChange, handleClick } = this.props;
    return (
      <div className="MessageInput">
        <input
          placeholder="Message…"
          value={this.props.draftMessage}
          onChange={(e) => this.props.handleChange(e)}
        />
        {/* <button
          type = 'button'
          disabled = { !this.props.draftMessage.length || (this.props.draftMessage.length >= 140) }
          onClick={() => this.props.handleClick()}>Add New Message</button> */}

      </div>
    );
  }
}
