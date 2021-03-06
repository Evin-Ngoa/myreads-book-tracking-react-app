import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./components/Book";
class SearchBooks extends Component{

    // initial State
    state = {
        query : ''
    }

    updateQuery = (text) => {

        console.log("text", text)
        this.setState({
            query : text
        })

        this.props.onSearchBooks(text)
    }

    render(){
        const { books, onBookShelfChange, hasBooks } = this.props
        const { query } = this.state

        return(
            <>
                <div className="search-books">
                    <div className="search-books-bar">
                      
                        <Link to="/"> 
                            <button className="close-search">Close</button>
                        </Link>
                        
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                hasBooks
                                ?
                                books.length > 0 && (
                                        books.map((bookObj) => (
                                            // console.log("books map ", books);
                                            <Book key={bookObj.id} book={bookObj} onBookShelfChange={onBookShelfChange} /> 
                                        ))
                                    
                                )
                                :
                                <span> No Results </span>
                                
                                
                            }
                        </ol>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchBooks;