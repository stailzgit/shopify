import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import PageNotFound from './pages/PageNotFound/PageNotFound';

class App extends Component {
  constructor() {
    super({});
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

/* export the component to be used in other components */
export default App;
