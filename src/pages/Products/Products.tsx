import axios from 'axios';
import React, { Component } from 'react';
import './Products.scss';
import { IProduct } from '../../models/IProduct';
import Cart from '../../components/Cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar';

interface MyState {
  loading: boolean;
  data: IProduct[] | null;
  error: string;
  search: string;
}

export default class Products extends Component<Record<string, never>, MyState> {
  constructor() {
    super({});
    this.state = {
      loading: true,
      data: [] as IProduct[],
      error: '',
      search: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=30');
      const data = await response.json();
      this.setState({ loading: false, data });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
  }

  render() {
    const { data, error, loading, search } = this.state;
    console.log(data, data);

    if (error) return <h1>{error}</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <div className="products">
          <div className="container">
            <SearchBar search={search} />
            <div className="products__list">
              {data?.map((cart) => (
                <Cart {...cart} key={cart.id} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
