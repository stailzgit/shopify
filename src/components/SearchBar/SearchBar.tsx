import React, { Component, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss';

interface MyState {
  text: string;
}

interface MyProps {
  search: string;
}

export default class SearchBar extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      text: '',
    };
  }

  debouncedSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      this.setState({ text: e.target.value });
    }, 300);
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="search">
            <input
              type="text"
              value={this.props.search}
              onChange={this.debouncedSearch}
              className="search__input"
            />
          </div>
        </div>
      </>
    );
  }
}
