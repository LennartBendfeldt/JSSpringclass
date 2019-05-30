import React, {Component} from 'react';
import '../css/Tracker.css';


class Workout extends Component{

    constructor(){

        super();
    }

    render(){

        return(

            <div className = "workout-header">
                <div className = "workout-summary">
                    <p>{this.props.exercise}</p>
                    <p>{this.props.timespent}</p>
                    <button className = "btn-edit">Edit</button>
                    <button className = "btn-delete-workout">Delete</button>
                </div>
            </div>
        );
    }
}

export default Workout;