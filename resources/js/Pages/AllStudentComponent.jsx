import React, {Component} from 'react';
import StudentComponent from './StudentComponent';

export default class AllStudentComponent extends Component {
    state = {
        student:{
            Name: 'Rosan',
            Age: 29,
            Email: 'rosansubba.43@gmail.com'
        }
    }
    render(){
        return(
            <>
                <StudentComponent student={this.state.student} />
            </>
        )
    }
}