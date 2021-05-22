import { render } from '@testing-library/react';
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

        fetch('/CourseContent', {
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
                <h2 className = "AddDeleteCourse__Title">Add Course Files</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label for = "ClassSelect" className = "Settings__Form--Text">Select a Class: </label>
                            <select id = "ClassSelect" name = "ClassSelect">
                                <option value = "Default1">Default1</option>
                                <option value = "Default2">Default2</option>
                                <option value = "Default3">Default3</option>
                    </select><br></br>
                    <input type="file" id="myFile" name="filename"></input>
                    <button className = "Settings__Form--Addbtns">Upload</button>
                    <button className = "Settings__Form--Cancelbtns">Cancel</button>
                </form>
            </div>
        );
    }

};

export default AddDeleteCourse;