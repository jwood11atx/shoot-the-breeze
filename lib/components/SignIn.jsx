import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class SignIn extends Component {

  render() {
    return (
      <div>
        { this.props.user ? <button onClick={() => signOut()}>Sign Out</button>
        : <button onClick={() => signIn()}>Sign In</button> }
      </div>
    );
  }
}
