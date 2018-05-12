import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function BookList (props) {
  const { books, updateBookState } = props;
    const bookShelves = [
      {
        title: 'Currently Reading',
        books: books.filter(book => book.shelf === 'currentlyReading')
      }, {
        title: 'Want to Read',
        books: books.filter(book => book.shelf === 'wantToRead')
      }, {
        title: 'Read',
        books: books.filter(book => book.shelf === 'read')
      }
    ];

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {
                bookShelves.map(bookShelf => {
                  return (
                    <div className="bookshelf" key={ bookShelf.title }>
                      <h2 className="bookshelf-title">{ bookShelf.title }</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          { 
                            bookShelf.books.map(book => {
                              return (
                                <li key={ book.id }>
                                  <Book book={ book } updateBookState={ updateBookState } />
                                </li>
                              )
                            }) 
                          }
                        </ol>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="open-search">
            <Link
              to='/search'
            >Search</Link>
          </div>
        </div>
    );
}

export default BookList;