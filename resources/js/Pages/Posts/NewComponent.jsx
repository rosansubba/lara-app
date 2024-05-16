import React, {Component} from 'react';

export default class NewComponent extends Component{
    state = {
        name: 'Rosan',
        age: 29,
        mobile: 9805332899,
        skills: ['React', 'Laravel', 'Python']
    }

    handleClick=(e)=>{
        console.log('Button is clicked.');
    }

    handleMouseOver=(e)=>{
        console.log(e.target, e.pageX, e.pageY);
    }

    handleCopy=(e)=>{
        console.log('Paragraph has been copy.');
    }

    handleChangeState = (e) => {
        this.setState({
            name: 'John',
            age: 28,
            mobile: 9815954119,
            skills: ['Java', 'Flutter', 'JavaScript']
        })
    }

    render(){
        return(
            <div>
                <h1>This is a Class Component</h1>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Mobile : {this.state.mobile}</p>
                <p>Skills : {this.state.skills.join(', ')}</p>
                <button type="button" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click Here</button>

                <p onCopy={this.handleCopy}>This is a test paragraph.</p>

                <button type='button' onClick={this.handleChangeState}>Change State</button>
            </div>
        )
    }
}