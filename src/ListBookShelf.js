import React, {Component} from "react";
import BookShelf from "./components/BookShelf";
import { Link } from "react-router-dom";
import Book from "./components/Book";
class ListBookShelf extends Component {
   
  
    render(){

        // destructuring assignment
        const { books } = this.props;

        let bookShelfCategories = {
            'categories' :[
                {
                    'id' : 1,
                    'name' : 'Currently Reading',
                    'key' : 'currentlyReading',
                },
                {
                    'id' : 2,
                    'name' : 'Want to Read',
                    'key' : 'wantToRead',
                },
                {
                    'id' : 3,
                    'name' : 'Read',
                    'key' : 'read',
                }
            ]
        };
        console.log("books in ListBookShelf", books);

        let read = "read", currentlyReading = "currentlyReading", wantToRead = "wantToRead";

        read = books.filter((book) => read.match(book.shelf))
        currentlyReading = books.filter((book) => currentlyReading.match(book.shelf))
        wantToRead = books.filter((book) => wantToRead.match(book.shelf))

        console.log("read",  read);
        console.log("currentlyReading",  currentlyReading);
        console.log("wantToRead",  wantToRead);

        return(
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                    <div>
                        {/* On 1st Load, the books will be empty but when DidMount the api will have data and render 2nd atmt */}
                        {/* {books.length === 0 || 
                            (
                            bookShelfCategories.categories.map((categories) => (
                                <BookShelf key={categories.id} categories={categories} books={books} />
                            ))
                        )} */}
                  
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        currentlyReading.map((book) => (
                                            // <BookShelf key={categories.id} categories={categories} books={books} />
                                            <Book key={book.id} book={book} /> 
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                
                                    {
                                        wantToRead.map((book) => (
                                            // <BookShelf key={categories.id} categories={categories} books={books} />
                                            <Book key={book.id} book={book} /> 
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {
                                    read.map((book) => (
                                        // <BookShelf key={categories.id} categories={categories} books={books} />
                                        <Book key={book.id} book={book} /> 
                                    ))
                                }
                                </ol>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">
                            <button >Add a book</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default ListBookShelf ;