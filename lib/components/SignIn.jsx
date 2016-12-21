import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class SignIn extends Component {

  render() {
    let { user, pullChatHistory, app } = this.props;
    return (
      <div className="login-display">
        { user ? <div>
                    <button
                      className='sign-out-btn'
                      onClick={() => signOut()}>
                      Log Out
                    </button>
                    Logged in as {user.displayName} ({user.email})
                  </div>
                : <button className='sign-in-btn'
                  onClick={() => {signIn();
                    setTimeout(() => {
                    pullChatHistory(app)}, 2500)}
                  }>Log In</button> }
      </div>
    );
  }
}
