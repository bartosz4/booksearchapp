import React from 'react';
import Book from './Book'

const BookList = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.books.map((book, i) => {
                            return(
                                <Book key={i}
                                      image={book.volumeInfo.imageLinks}
                                      title={book.volumeInfo.title}
                                      description={book.volumeInfo.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default BookList;