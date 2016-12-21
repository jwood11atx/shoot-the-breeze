import React, { Component } from 'react';
import ReactDOM from "react-dom";
import firebase, { reference, signIn, signOut } from '../firebase';

export default class Buttons extends Component {
  userCheck(user){
    const { draftMessage, addMessage, deleteMessage, scrollDown } = this.props;
    let buttonSection;
    if(user){
      buttonSection = <div className='buttons-container'>
        <button
          type='button'
          className='submit-button'
          disabled = { !draftMessage || (draftMessage.length >= 140) }
          onClick={() => {addMessage(); setTimeout(() => scrollDown(), 0)}}>Submit</button>
        <button
          type='button'
          className='clear-button'
          disabled = { !draftMessage || (draftMessage.length >= 140) }
          onClick={(e) => deleteMessage()}>Clear</button>
      </div>
    } else {
      buttonSection = <div></div>;
    }
    return buttonSection;
  }

  render() {
    const { user } = this.props
    return (
      this.userCheck(user)
    );
  }
}
