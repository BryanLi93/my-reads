import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookList from './BookList';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';

BooksAPI.getAll();
// .then(data => console.log(data));

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
           <BookList />
        )} />
        <Route path="/search" render={() => (
          <BookSearch /> 
        )} />
      </div>
    )
  }
}

export default BooksApp
