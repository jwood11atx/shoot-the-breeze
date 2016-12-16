import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class Buttons extends Component {

  render() {
    const { draftMessage, handleClick } = this.props;
    return (
      <div className='buttons'>
        <button
          type='button'
          className='submit-button'
          disabled = { !this.props.draftMessage || (this.props.draftMessage.length >= 140) }
          onClick={() => this.props.handleClick()}>Add New Message</button>
      </div>
    );
  }
}
