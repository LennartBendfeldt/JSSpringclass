import React, {Component} from 'react';
import '../css/board.css';
import Note from './note';

class Board extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
          <div className="div-board">
            <div className="row">
              <Note title="Class Notes" body="Always use constructors when extending another class"/>
              <Note title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234"/>
              <Note title="React Notes" body="Everything in React is a component"/>
            </div>
          </div>
          <div>
            <button className="btn btn-success add-button">Add</button>
          </div>
        </div>
      );
    }
  }
  
  export default Board;