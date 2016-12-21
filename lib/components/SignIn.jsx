import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class SignIn extends Component {

  render() {
    let { user, pullChatHistory, app } = this.props;
    return (
      <div className="login-display">
        { user ? <div>
                    Logged in as {user.displayName} ({user.email})
                    <button onClick={() => signOut()}>Sign Out</button>
                  </div>
                : <button onClick={() => {signIn(); setTimeout(()=>{pullChatHistory(app)}, 2500)}}>Sign In</button> }
      </div>
    );
  }
}
