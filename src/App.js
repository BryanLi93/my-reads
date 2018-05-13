import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookList from './BookList';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    }).catch(e => {
      console.log(e);
    });
  }
  updateBookState (book, shelf) {
    BooksAPI.update(book, shelf).then(data => {
      console.log(data);
      this.setState(preState => {
        let _books = preState.books;
        let _book = _books.find(_book => _book.id === book.id);
        if (_book) {
          _book.shelf = shelf;
        } else {
          book.shelf = shelf;
          _books.push(book);
        }
        return {
          books: _books
        }
      });
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
           <BookList books={this.state.books} updateBookState={ this.updateBookState.bind(this) } />
        )} />
        <Route path="/search" render={() => (
          <BookSearch books={this.state.books} updateBookState={ this.updateBookState.bind(this) } /> 
        )} />
      </div>
    )
  }
}

export default BooksApp
