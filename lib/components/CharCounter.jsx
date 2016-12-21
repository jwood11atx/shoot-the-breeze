import React from 'react';

export default class CharCounter extends React.Component {
  render() {
    let { draftMessage } = this.props;
    let draftMessageLength = draftMessage ? draftMessage.length : 0;

    return (
      <span className="char-counter"> {140 - draftMessageLength} </span>
    )
  }
}
