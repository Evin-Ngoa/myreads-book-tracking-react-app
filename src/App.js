import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBookShelf from './ListBookShelf';
import * as BooksAPI from './BooksAPI'
import { Route, Routes } from 'react-router-dom';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[]
  }

  componentDidMount(){
        BooksAPI.getAll().then((books) => {
            console.log("books componentDidMount", books);
            this.setState({ books : books })
        })

        console.log("books", this.state.books);
  }

  handleBookMovement = (book, shelf) => {
    // Send request to Book Update
    BooksAPI.update(book, shelf).then((bookdata) => {
        console.log("bookdata", bookdata)
    })

    // Update current book Object
    book.shelf = shelf;
    this.setState(state => ({
        // Remove the book and concatenate to the new one
        books : state.books.filter(bk => bk.id !== book.id).concat(book)
    }))
  }

  render() {
    console.log("books render", this.state.books.length);
    return (
      <div className="app">
        <Routes>
            <Route path="/search" 
                element = {
                    <SearchBooks  />
                }
            />
            <Route path="/" 
                element = {
                    <ListBookShelf books={this.state.books} onBookShelfChange = {this.handleBookMovement}/>
                }
            />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
