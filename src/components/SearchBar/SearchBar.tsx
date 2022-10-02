import React, { Component, ChangeEvent } from 'react';
import './SearchBar.scss';
import SearchIcon from '../../assets/search-icon.svg';

interface IState {
  text: string;
}

interface IProps {
  search: string;
  setSearch: ReturnType<typeof Function>;
}

interface ICallback {
  callback: (search: string) => void;
}

export default class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: this.props.search,
    };
  }

  // debounce = (callback: ReturnType<typeof Function>, delay: number) => {
  //   let timer: ReturnType<typeof setTimeout>;
  //   return (...args: string[]) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => callback(...args), delay);
  //   };
  // };

  // debounce = (fn: ReturnType<typeof Function>, ms = 300) => {
  //   let timeoutId: ReturnType<typeof setTimeout>;
  //   return function (...args: string[]) {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => fn.apply(args), ms);
  //   };
  // };

  // debounce = (fn: ReturnType<typeof Function>, delay: number) => {
  //   let timer: NodeJS.Timeout;
  //   return function (search: string) {
  //     if (timer === undefined) {
  //       fn.apply(search);
  //     }
  //     clearTimeout(timer);
  //     timer = setTimeout(() => fn.apply(search), delay);
  //     return timer;
  //   };
  // };

  search = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value }, () => {
      this.props.setSearch(this.state.text);
    });
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="input text"
          value={this.state.text}
          onChange={this.search}
          className="search__input"
        />
        <div className="search__icon">
          <img src={SearchIcon} alt="search-icon" />
        </div>
      </div>
    );
  }
}
