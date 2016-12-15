import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class MessageInput extends Component {

  render() {
    return (
      <div className="MessageInput">
        <input
          placeholder="Message…"
          value={this.props.draftMessage}
          onChange={(e) => this.props.handleChange(e)}
        />
        <button onClick={() => this.props.handleClick()}>Add New Message</button>
      </div>
    );
  }
}
