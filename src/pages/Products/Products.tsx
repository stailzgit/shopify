import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { JsxChild } from 'typescript';
import './Products.scss';

export default class Products extends Component {
  constructor() {
    super({});
    this.state = {};
  }
  render() {
    console.log('window.location.pathname', window.location.hostname);

    return (
      <div className="products">
        <div className="container">Products</div>
      </div>
    );
  }
}
