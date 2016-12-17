import React from 'react';

class CharCounter extends React.Component {
  render() {
    return (
      <span> {140 - this.props.draftMessage.length} </span>
    )
  }
}

module.exports = CharCounter;
