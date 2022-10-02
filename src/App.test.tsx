import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders react component About', async () => {
  render(
    <Router>
      <About />
    </Router>
  );

  const linkElement = screen.getByText(/Shopify/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders react component SearchInput', async () => {
  render(
    <Router>
      <Products />
    </Router>
  );
  const linkElement = screen.queryByPlaceholderText(/input text/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders react component cart(Product)', async () => {
  render(
    <Router>
      <Cart
        id={0}
        title={'table'}
        price={'387'}
        description={'description'}
        category={'furniture'}
        image={''}
        rating={{
          rate: 4,
          count: 100,
        }}
      />
    </Router>
  );

  expect(screen.getByText(/count/i)).toBeInTheDocument();
  expect(screen.getByText(/387/i)).toBeInTheDocument();
});

const TEST_KEY = 'userSearch';
const TEST_VALUE = 'testSearch';

describe('save in the localStorage search text ', () => {
  it('should set the default value from localStorage if it exists', () => {
    localStorage.setItem(TEST_KEY, TEST_VALUE);
    const result = localStorage.getItem(TEST_KEY);
    expect(result).toEqual(TEST_VALUE);
    expect(localStorage.getItem(TEST_KEY)).toEqual(TEST_VALUE);
  });
});
