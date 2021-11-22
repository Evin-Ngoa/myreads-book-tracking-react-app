import React, {Component} from "react";
import BookShelf from "./components/BookShelf";
import { Link } from "react-router-dom";
class ListBookShelf extends Component {
     
    render(){

        // destructuring assignment
        const { books, onBookShelfChange } = this.props;

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
        // console.log("books in ListBookShelf", books);

        let read = "read", currentlyReading = "currentlyReading", wantToRead = "wantToRead";

        read = books.filter((book) => read.match(book.shelf))
        currentlyReading = books.filter((book) => currentlyReading.match(book.shelf))
        wantToRead = books.filter((book) => wantToRead.match(book.shelf))

        // console.log("read",  read);
        // console.log("currentlyReading",  currentlyReading);
        // console.log("wantToRead",  wantToRead);
        // console.log("bookShelfCategories 1 ",  bookShelfCategories.categories[0].name);

        return(
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <BookShelf key={bookShelfCategories.categories[0].id} 
                            shelf={bookShelfCategories.categories[0].name} 
                            books={currentlyReading} 
                            onBookShelfChange={onBookShelfChange} 
                        />
                        <BookShelf key={bookShelfCategories.categories[1].id} 
                            shelf={bookShelfCategories.categories[1].name} 
                            books={wantToRead} 
                            onBookShelfChange={onBookShelfChange} 
                        />
                        <BookShelf key={bookShelfCategories.categories[2].id} 
                            shelf={bookShelfCategories.categories[2].name} 
                            books={read} 
                            onBookShelfChange={onBookShelfChange} 
                        />
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