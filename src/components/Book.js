import React, { Component } from "react";

// function Book(props){
//     return (
        
//         <li>
//             <div className="book">
//                 <div className="book-top">
//                     <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
//                     <div className="book-shelf-changer">
//                     <select>
//                         <option value="move" disabled>Move to...</option>
//                         <option value="currentlyReading">Currently Reading</option>
//                         <option value="wantToRead">Want to Read</option>
//                         <option value="read">Read</option>
//                         <option value="none">None</option>
//                     </select>
//                     </div>
//                 </div>
//                 <div className="book-title"> {props.book.title} ({props.book.shelf})</div>
//                 <div className="book-authors">
//                     {props.book.authors.map((author) => (
//                         <span key={author}> {author} <br/> </span>
//                     ))}
//                 </div>
//             </div>
//         </li>
        
//     )

// }

class Book extends Component{

    state = {
        book_value: ''
      }

    render(){

        const { book, onBookShelfChange } = this.props

        return(
        <li>
            <div className="book">
                <div className="book-top">
                    {
                         book.hasOwnProperty('imageLinks') && book.imageLinks.hasOwnProperty('thumbnail')
                         ?
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        :
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url()` }}></div>
                        
                    }
                    <div className="book-shelf-changer">
                    <select onChange={(event) => onBookShelfChange(book, event.target.value) } value={this.state.book_value}>
                        <option value="move">Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title"> 
                    {book.title} 
                    {/* ({book.shelf}) */}
                </div>
                <div className="book-authors">
                    {
                        // Some books miss the authors property
                        book.hasOwnProperty('authors')
                        ?
                            book.authors.length > 0 && (
                                book.authors.map((author) => (
                                    <span key={author}> {author} <br/> </span>
                                ))
                            )
                        : <span> None </span> 
                    }
                </div>
            </div>
        </li>
        )
    }

}

export default Book;