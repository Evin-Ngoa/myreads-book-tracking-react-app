import React, {Component} from "react";
import Book from "./Book";

// function BookShelf(props){
//     const categories = props.categories;
//     const books = props.books;
//     console.log("books in BookShelf", books);
//     return (
//             <div>
//                  <div className="bookshelf">
//                         <h2 className="bookshelf-title">{categories.name}</h2>
//                         <div className="bookshelf-books">
//                             <ol className="books-grid">
                                
//                                 {/* <Book book={book} /> */}
//                                 {
//                                     books.map((book) => (
//                                         // <BookShelf key={categories.id} categories={categories} books={books} />
//                                         <Book key={book.id} book={book} /> 
//                                     ))
//                                 }
                              
//                                 {/* <li>
//                                     <div className="book">
//                                     <div className="book-top">
//                                         <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
//                                         <div className="book-shelf-changer">
//                                         <select>
//                                             <option value="move" disabled>Move to...</option>
//                                             <option value="currentlyReading">Currently Reading</option>
//                                             <option value="wantToRead">Want to Read</option>
//                                             <option value="read">Read</option>
//                                             <option value="none">None</option>
//                                         </select>
//                                         </div>
//                                     </div>
//                                     <div className="book-title">Ender's Game</div>
//                                     <div className="book-authors">Orson Scott Card</div>
//                                     </div>
//                                 </li> */}
//                             </ol>
//                         </div>
//                     </div>
//             </div>
//     )
// }


class BookShelf extends Component{

    render(){

        const { categories, books } = this.props
    
        return(
            <div key={categories.name}>
                 <div className="bookshelf">
                    <h2 className="bookshelf-title">{categories.name}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                books.map((book) => (
                                    // <BookShelf key={categories.id} categories={categories} books={books} />
                                    <Book key={book.id} book={book} /> 
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf