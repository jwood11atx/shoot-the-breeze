import React from 'react';

export default class Users extends React.Component {

  usersCheck() {
    let userList = {};
    if(this.props.messages){
        <aside className= "user-list">{this.props.messages.map((m,i) =>
          userList[m.user.displayName] =
            <p
              key={i}
              className='user-btn'
              onClick= {() => {this.props.filterByUser(m.user.displayName)}}>{m.user.displayName} ({m.user.email})
            </p>
          )};
        </aside>
      return Object.values(userList);
    }
  }

  render() {
    return (
      <aside className='user-list'>
        <h2 className='user-header'> Users </h2>
        {this.usersCheck()}
      </aside>
    );
  }
}
