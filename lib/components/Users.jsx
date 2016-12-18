import React from 'react';

export default class Users extends React.Component {

  render() {
    const users = (
      <span>{this.props.messages.map(m =>
        <li key={m.user.uid}>
          <button
            className='UserBtn'
            onClick= {() => {this.props.filterByUser(m.user.displayName)}}>{m.user.displayName}
          </button>
          {m.user.email}
        </li>)}
      </span>);

    return (
      <aside className='UserList'>
        <h4> Users </h4>
        {users}
      </aside>
    );
  }
}

// module.exports = Users;
