import React from 'react';

export default class Users extends React.Component {

  usersCheck() {
    let userList = {};
    if(this.props.messages){
        <aside className= "user-list">{this.props.messages.map((m,i) =>
          userList[m.user.displayName] =
          <p key={i}>
            <button
              className='user-btn'
              onClick= {() => {this.props.filterByUser(m.user.displayName)}}>{m.user.displayName}
            </button>
            {m.user.email}
          </p>)};
        </aside>
      return Object.values(userList);
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
