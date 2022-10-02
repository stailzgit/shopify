import React, { Component } from 'react';
import './Loader.scss';

export default class Loader extends Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
}
