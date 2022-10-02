import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import Logo from '../../assets/shop-logo.svg';
import { ROUTES } from '../../consts/routes';
import SearchBar from '../SearchBar/SearchBar';

export default class Nav extends Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav">
        <div className="container">
          <div className="nav__inner">
            <Link to={ROUTES.products.path} className="nav__logo">
              <img src={Logo} alt="logo" />
            </Link>

            <div className="nav__items">
              {Object.values(ROUTES).map(({ path, title }) => (
                <Link to={path} className="nav__item" key={path}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
