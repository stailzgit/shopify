import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import { ROUTES } from '../../consts/routes';
import { IProduct } from '../../models/IProduct';
import CategoryIcon from '../../assets/category.svg';
import CategoryTag from '../../assets/tag.svg';
import RateIcon from '../../assets/star-rate.svg';

export default class Cart extends Component<IProduct> {
  constructor(props: IProduct) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      category,
      price,
      title,
      description,
      image,
      rating: { count, rate },
    } = this.props;

    return (
      <div className="cart">
        <div className="cart__image">
          <img src={image} alt="product-img" />
        </div>

        <div className="cart__body">
          <div className="cart__title">{title}</div>

          <div className="cart__category">
            <img src={CategoryTag} className="cart__category-icon" alt="product-tag" />
            <div className="cart__category-title">{category}</div>
          </div>

          <div className="cart__rate-count">
            <div className="cart__rate">
              <img className="cart__rate-icon" src={RateIcon} alt="rate-icon" />
              <div className="cart__rate-count">{rate}</div>
            </div>

            <div>count {count}</div>
          </div>

          <div className="cart__price">US ${price}</div>
          {/* <div>{description}</div> */}
        </div>
      </div>
    );
  }
}
