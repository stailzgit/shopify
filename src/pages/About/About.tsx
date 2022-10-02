import React, { Component } from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts/routes';

export default class About extends Component {
  constructor() {
    super({});
    this.state = {};
  }
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="about__inner">
            <h1 className="about__header1">Shopify</h1>
            <h2 className="about__header2">for your shopping</h2>
            <div className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, culpa molestias
              voluptatum temporibus libero nesciunt quam doloremque vitae architecto nam, labore
              molestiae esse sequi asperiores veritatis incidunt et ut.
            </div>
            <Link to={ROUTES.products.path} className="about__btn">
              Go shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
