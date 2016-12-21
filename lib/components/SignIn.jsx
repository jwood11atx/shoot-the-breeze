import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class SignIn extends Component {

  render() {
    let { user } = this.props;
    return (
      <div className="login-display">
        { user ? <div>
                    <button
                      className='sign-out-button sign-in-out'
                      onClick={() => signOut()}>
                      Sign Out
                    </button>
                    Logged in as {user.displayName} ({user.email})
                  </div>
                : <button
                  className='sign-in-button sign-in-out'
                  onClick={() => signIn()}>
                  Sign In
                </button> }
      </div>
    );
  }
}
