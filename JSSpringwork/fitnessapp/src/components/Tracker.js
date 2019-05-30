import React, {Component} from 'react';
import '../css/Tracker.css';
import Workout from './Workout';
import Formsubmit from './Formsubmit';

class Tracker extends React.Component {
  constructor() {
    super();
    this.state = {
      workout: [
        {
          exercise: "You have not logged any workouts",
          timespent: "Shall we add your first exercise?"
        }
      ]
    }
  }

  

  addWorkout() {
    this.state.workout.push(
      {
        exercise: "Running",
        timespent: "20 mins"
      }
    );
    this.setState(
      {
        workout: this.state.workout
      }
    );
  }

  render() {
    return (
      
    <div className="card-body">
        <div className="workouts">
            <p>My Workouts</p>
          {this.state.workout.map(workout =>{
              return <Workout exercise={workout.exercise} timespent = {workout.timespent} />
          })}

        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addWorkout.bind(this)}>Add</button>
        </div>
        <div><Formsubmit /></div>
    </div>

    );
  }
}



export default Tracker;