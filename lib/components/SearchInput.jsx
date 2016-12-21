import React from 'react';

export default class SearchInput extends React.Component {
    render() {
      return (
          <input
            className="search-input"
            placeholder="Filter"
            onChange={e => this.props.searchMessages(e)}
          />
      );
    }
  }
