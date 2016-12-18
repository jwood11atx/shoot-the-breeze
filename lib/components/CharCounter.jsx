import React from 'react';

export default class CharCounter extends React.Component {
  render() {
    return (
      <span> {140 - this.props.draftMessage.length} </span>
    )
  }
}
