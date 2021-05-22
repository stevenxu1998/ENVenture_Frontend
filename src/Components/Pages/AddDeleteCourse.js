import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class AddDeleteCourse extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:3000/Course', {
            method:'POST',
            body: data,
        }).then(response =>{
            if (!response.ok){
                throw Error("Error");
            }
            return response.json();
        }).catch(error=>{
            console.log(error);
        });
    }
    render(){
    return (
        <div className ="AddDeleteCourse">
            <h2 className = "AddDeleteCourse__Title">Add a Course</h2>
            <form onSubmit = {this.handleSubmit}>
                <label for = "Course" className = "Settings__Form--Text">Course</label><br></br>
                <input name = "Course" id = "Course"/><br></br>
                <label for = "ClassLimit" className = "Settings__Form--Text">Class Limit (between 10 to 199)</label><br></br>
                <input type = "number" name = "ClassLimit" id = "ClassLimit" min="10" max="199"/><br></br>
                <button className = "Settings__Form--Addbtns">Add</button>
                <button className = "Settings__Form--Cancelbtns">Cancel</button>
            </form>
            <h2 className = "AddDeleteCourse__Title">Delete a Course</h2>
            <form onSubmit = {this.handleSubmit}>
                <label for = "ClassSearch" className = "Settings__Form--Text">Search Class: </label>
                        <select id = "ClassSearch" name = "ClassSearch">
                            <option value = "Default1">Default1</option>
                            <option value = "Default2">Default2</option>
                            <option value = "Default3">Default3</option>
                </select><br></br>
                <button className = "Settings__Form--Deletebtns">Delete</button>
                <button className = "Settings__Form--Cancelbtns">Cancel</button>
            </form>
        </div>
    );}
};

export default AddDeleteCourse;