import React, { Component } from 'react';
import ReactDOM from "react-dom";
import firebase, { reference, signIn, signOut } from '../firebase';

export default class Sort extends Component {

  render() {
    return (
      <div className='sort-buttons'>
        <button>Sort Up</button>
        <button>Sort Down</button>
      </div>
    );
  }
}
