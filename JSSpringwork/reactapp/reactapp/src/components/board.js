import React, {Component} from 'react';
import '../css/board.css';
import Note from './note';

class Board extends Component {
    constructor() {
      super();
      this.state = {
        notes: [
          {
            title: "Class Notes",
            body: "Always use constructors when extending another class"
          },
          {
            title: "My New Address",
            body: "2001 N Lonhill Phoenix, AZ 81234"
          },
          {
            title: "React Notes",
            body: "Everything in React is a component"
          }
        ]
      }
    }
  
    render() {
      return (
        <div>
          <div className="div-board">
            <div className="row">
              <Note />
              <Note/>
              <Note/>
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