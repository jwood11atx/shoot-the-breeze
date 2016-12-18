import React, { Component } from 'react';
import ReactDOM from "react-dom";
import firebase, { reference, signIn, signOut } from '../firebase';

export default class Sort extends Component {

  render() {
    return (
      <div className='sort-buttons'>
        <button onClick={() => this.props.sort('up')}>Sort Up</button>
        <button onClick={() => this.props.sort('up')}>Sort Down</button>
      </div>
    );
  }
}
