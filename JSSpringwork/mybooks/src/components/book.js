import React, {Component} from 'react';
import '../css/book.css';

class Book extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      
          <div className="books">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.author}</p>
            <p>{this.props.year}</p>
            <p>{this.props.genre}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        
    );
  }
}

Book.defaultProps = {
    title: "Harry Potter",
    author: "jk rowling",
    year: "1995",
    genre: "fantasy"
};

// Book.propTypes = {
//   title: PropTypes.string
// };

export default Book;