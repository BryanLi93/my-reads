import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class BookSearch extends Component {
  state = {
    searchedBooks: []
  }
  search (keyword) {
    const shelfBooks = this.props.books;
    keyword && BooksAPI.search(keyword)
      .then(books => {
        if (Array.isArray(books)) {
          for (const shelfBook of shelfBooks) {
            let book = books.find(book => book.id === shelfBook.id);
            book && (book.shelf = shelfBook.shelf);
          }
          this.setState({ searchedBooks: books })
        } else {
          this.setState({ searchedBooks: [] })
        }
      });
  }
  render() {
    const { updateBookState } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={ event => this.search(event.target.value) } />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchedBooks.map(book => {
                return (
                  <li key={book.id}>
                    <Book book={book} updateBookState={updateBookState} />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;

// TODO:
// onClick={() => this.setState({ showSearchPage: false })}