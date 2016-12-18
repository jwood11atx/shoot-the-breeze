import React, { Component } from 'react';
import ReactDOM from "react-dom";
import firebase, { reference, signIn, signOut } from '../firebase';

export default class Buttons extends Component {

  render() {
    const { draftMessage, addMessage, deleteMessage } = this.props;
    ;
    return (
      <div className='buttons'>
        <button
          type='button'
          className='submit-button'
          disabled = { !this.props.draftMessage || (this.props.draftMessage.length >= 140) }
          onClick={(e) => this.props.addMessage()}>Add New Message</button>
        <button
          type='button'
          className='clear-button'
          disabled = { !this.props.draftMessage || (this.props.draftMessage.length >= 140) }
          onClick={() => this.props.deleteMessage()}>Clear</button>
      </div>
    );
  }
}
