import React from 'react';

export default class CharCounter extends React.Component {
  userCheck(user){
    let { draftMessage } = this.props;
    let draftMessageLength = draftMessage ? draftMessage.length : 0;
    if(user){
      return <span className="char-counter"> {140 - draftMessageLength} </span>
    } else {
      return <div></div>
    }
  }
  render() {
    let { user } = this.props;
    return (
      this.userCheck(user)
    )
  }
}
