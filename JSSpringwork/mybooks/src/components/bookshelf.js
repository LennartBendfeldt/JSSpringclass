import React, {Component} from 'react';
import '../css/bookshelf.css';
import PropTypes from 'prop-types';
import Book from './book';

class Bookshelf extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      
    <div className="card-body">
        <div className="bookshelves">
            <h5 className="card-title">{this.props.title}</h5>
      
            <Book />
            <Book />
        </div>

    </div>
        
    );
  }
}

Bookshelf.defaultProps = {
  title: "My Bookshelf",
};

Bookshelf.propTypes = {
  title: PropTypes.string
};

export default Bookshelf;