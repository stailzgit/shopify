import React, { Component } from 'react';
import './PageNotFound.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts/routes';

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <h1>Error 404</h1>
        <h2>Page not found</h2>
      </div>
    );
  }
}
