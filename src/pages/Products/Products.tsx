import React, { Component } from 'react';
import './Products.scss';
import { IProduct } from '../../models/IProduct';
import Cart from '../../components/Cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';

interface MyState {
  loading: boolean;
  products: IProduct[];
  filteredProducts: IProduct[];
  error: string;
  search: string;
  isGetApi: boolean;
}
export default class Products extends Component<Record<string, never>, MyState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      loading: true,
      products: [] as IProduct[],
      filteredProducts: [] as IProduct[],
      error: '',
      search: localStorage.getItem('userSearch') as string,
      isGetApi: false,
    };
  }

  searchUpdate = () => {
    const searchBy = ['title', 'category', 'description'];
    const tmpFilterProducts = this.state.products.filter((product) =>
      Object.entries(product).some(
        ([key, value]) =>
          searchBy.some((item) => item === key) &&
          String(value).toLowerCase().includes(this.state.search.toLowerCase())
      )
    );
    this.setState({ filteredProducts: tmpFilterProducts });
  };

  setSearch = (search: string) => {
    this.setState({ search }, () => this.searchUpdate());
    localStorage.setItem('userSearch', search);
  };

  async componentDidMount() {
    if (this.state.isGetApi) return;

    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=30');
      const productsResponse = await response.json();
      this.setState({ loading: false, products: productsResponse });
      this.setState({ filteredProducts: productsResponse });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    } finally {
      this.setState({ isGetApi: true });
    }
  }

  render() {
    const { filteredProducts, error, loading, search } = this.state;
    return (
      <>
        <div className="products">
          <div className="container">
            <div className="products__inner">
              <SearchBar search={search} setSearch={this.setSearch} />

              {error && <h1 className="products__error">{error}</h1>}
              {loading && <Loader />}

              <div className="products__list">
                {filteredProducts?.map((cart) => (
                  <Cart {...cart} key={cart.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
