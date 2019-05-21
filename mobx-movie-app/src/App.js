import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import MovieWrapper from './components/MovieWrapper';
import './App.css';
import Header from './components/Header';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieWrapper />
      </div>
    );
  }
}

export default App;
