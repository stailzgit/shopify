import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import Logo from '../../assets/shop-logo.svg';
import { ROUTES } from '../../consts/routes';

export default class Nav extends Component {
  constructor() {
    super({});
    this.state = {};
  }

  render() {
    console.log('window.location.pathname', window.location.pathname);
    console.log('window.location.pathname', window.location.pathname);

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
