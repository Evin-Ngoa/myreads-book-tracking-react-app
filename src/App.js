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
    books:[],
    queryBookResults:[],
    hasBookResults: false
  }

  componentDidMount(){
        BooksAPI.getAll().then((books) => {
            // console.log("books componentDidMount", books);
            this.setState({ books : books })
        })

        // console.log("books", this.state.books);
  }

  handleBookMovement = (book, shelf) => {
    // Send request to Book Update
    BooksAPI.update(book, shelf).then((bookdata) => {
        // console.log("bookdata", bookdata)
    })

    // Update current book Object
    book.shelf = shelf;
    this.setState(state => ({
        // Remove the book and concatenate to the new one
        books : state.books.filter(bk => bk.id !== book.id).concat(book)
    }))
  }
  
  searchBooks = (query) => {

    if(query){
        BooksAPI.search(query.trim(), 20).then((response) => {

            response.length > 0
            ? this.setState({ queryBookResults: response, hasBookResults: true })
            : this.setState({ queryBookResults: [], hasBookResults: false });

            // console.log("queryBookResults", this.state.queryBookResults);
        })
    }else{
        this.setState({ queryBookResults: [], hasBookResults: false })
        console.log('Set Empty String')
    }


  }

  render() {
    // console.log("books render", this.state.books.length);
    const { queryBookResults, hasBookResults } = this.state;

    console.log("queryBookResults Render", queryBookResults);

    return (
      <div className="app">
        <Routes>
            <Route path="/search" 
                element = {
                    <SearchBooks  
                        onSearchBooks={this.searchBooks} 
                        onBookShelfChange={this.handleBookMovement}
                        books={queryBookResults} 
                        hasBooks={hasBookResults} 
                    />
                }
            />
            <Route path="/" 
                element = {
                    <ListBookShelf books={this.state.books} onBookShelfChange={this.handleBookMovement}/>
                }
            />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
