import React from 'react';

export default class SearchInput extends React.Component {
    render() {
      return (
        <div >
          <input
            className="search-input"
            placeholder="Search"
            onChange={e => searchMessages(e)}
          />
        </div>
      );
    }
  }
