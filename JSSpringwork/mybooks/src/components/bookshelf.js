import React, {Component} from 'react';
import '../css/bookshelf.css';
import Book from './book';

class Bookshelf extends React.Component {
  constructor() {
    super();
    this.state = {
      book: [
        {
          title: "Class Notes",
          author: "",
          year: "",
          genre: "Always use constructors when extending another class"
        },
        {
          title: "Class Notes",
          author: "",
          year: "",
          genre: "Always use constructors when extending another class"
        },
        {
          title: "Class Notes",
          author: "",
          year: "",
          genre: "Always use constructors when extending another class"
        }
      ]
    }
  }

  

  addBook() {
    this.state.book.push(
      {
        title: "Class Notes",
        author: "",
        year: "",
        genre: "Always use constructors when extending another class"
      }
    );
    this.setState(
      {
        book: this.state.book
      }
    );
  }

  render() {
    return (
      
    <div className="card-body">
        <div className="bookshelves">
          {this.state.book.map(book =>{
              return <Book title={book.title} author = {book.author} year = {book.year} genre = {book.genre} />
          })}

        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
        </div>
    </div>

    );
  }
}



export default Bookshelf;