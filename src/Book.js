import React, { Component } from 'react';

class Book extends Component {
    render () {
        const { book, updateBookState } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" src={ book.imageLinks && book.imageLinks.thumbnail } alt={ book.title } />
                    <div className="book-shelf-changer">
                        <select onChange={event => updateBookState(book, event.target.value) } value={ book.shelf }>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors && book.authors[0] }</div>
            </div>
        );
    }
}

export default Book;