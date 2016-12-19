import React from 'react';

export default class Users extends React.Component {

  usersCheck() {
    let userArray = [];
    if(this.props.messages){
        <span>{this.props.messages.map(m =>
          userArray.push(<li key={m.user.uid}>
            <button
              className='user-btn'
              onClick= {() => {this.props.filterByUser(m.user.displayName)}}>{m.user.displayName}
            </button>
            {m.user.email}
          </li>))};
        </span>
      return userArray;
    }
  }


  render() {

    return (
      <aside className='user-list'>
        <h4> Users </h4>
        {this.usersCheck()}
      </aside>
    );
  }
}

// module.exports = Users;
