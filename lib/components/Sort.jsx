import React, { Component } from 'react';
import ReactDOM from "react-dom";
import firebase, { reference, signIn, signOut } from '../firebase';

export default class Sort extends Component {

  render() {
    return (
      <div className='sort-buttons'>
        <button onClick={() => this.props.sort('up')}>Sort &uarr;</button>
        <button onClick={() => this.props.sort('down')}>Sort &darr;</button>
      </div>
    );
  }
}
