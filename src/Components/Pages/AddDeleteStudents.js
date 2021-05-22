import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//importing jquery
import $ from 'jquery';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class AddDeleteStudents extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        // NOTE: you access FormData fields with `data.get(fieldName)`    
        // const [month, day, year] = data.get('birthdate').split('/');
        // const serverDate = `${year}-${month}-${day}`;
        // data.set('birthdate', serverDate);
        // data.set('username', data.get('username').toUpperCase());

        fetch('http://localhost:9000/Students', {
            method:'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
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
        <div className ="AddDeleteStudents">
            <h3>Add/Delete Student from a Course</h3>
            <form onSubmit = {this.handleSubmit}>
                <label for = "StudentName" className = "Settings__Form--Text">Student Name</label><br></br>
                <input name = "StudentName" id = "StudentName"/><br></br>
                <label for = "StudentID" className = "Settings__Form--Text">Student ID</label><br></br>
                <input name = "StudentID" id = "StudentID"/><br></br>
                <label for = "Course" className = "Settings__Form--Text">Course</label><br></br>
                <input name = "Course" id = "Course"/><br></br>
                <button className = "Settings__Form--Addbtns">Add</button>
                <button className = "Settings__Form--Deletebtns">Delete</button>
            </form>
            <h3>Add/Delete Student</h3>
            <h4>Contact Information</h4>
            <form onSubmit = {this.handleSubmit}>
                <label for = "FirstName" className = "Settings__Form--Text">First Name</label><br></br>
                <input name = "FirstName" id = "FirstName"/><br></br>
                <label for = "LastName" className = "Settings__Form--Text">Last Name</label><br></br>
                <input name = "LastName" id = "LastName"/><br></br>
                <label for = "Email" className = "Settings__Form--Text">Email</label><br></br>
                <input name = "Email" id = "Email"/><br></br>
                <label for = "Birthdate" className = "Settings__Form--Text">Date of Birth</label><br></br>
                <input name = "Birthdate" id = "Birthdate" placeholder = "(mm/dd/yyyy)"/><br></br>
                <label for = "Address 1" className = "Settings__Form--Text">Address 1</label><br></br>
                <input name = "Address 1" id = "Address 1"/><br></br>
                <label for = "Address 2" className = "Settings__Form--Text">Address 2</label><br></br>
                <input name = "Address 2" id = "Address 2"/><br></br>
                <label for = "City" className = "Settings__Form--Text">City</label><br></br>
                <input name = "City" id = "City"/><br></br>
                <label for = "ProvinceState" className = "Settings__Form--Text">Province/State</label><br></br>
                <input name = "ProvinceState" id = "ProvinceState"/><br></br>
                <label for = "Country" className = "Settings__Form--Text">Country</label><br></br>
                <input name = "Country" id = "Country"/><br></br>
                <label for = "Zip" className = "Settings__Form--Text">Zip/Postal Code</label><br></br>
                <input name = "Zip" id = "Zip"/><br></br>
                <label for = "HomePhone" className = "Settings__Form--Text">HomePhone</label><br></br>
                <input name = "HomePhone" id = "HomePhone"/><br></br>
                <label for = "CellPhone" className = "Settings__Form--Text">CellPhone</label><br></br>
                <input name = "CellPhone" id = "CellPhone"/><br></br>
                <label for = "High School" className = "Settings__Form--Text">High School</label><br></br>
                <input name = "High School" id = "High School"/><br></br>
                <label for = "PostSecondary" className = "Settings__Form--Text">College/University</label><br></br>
                <input name = "PostSecondary" id = "PostSecondary"/><br></br>
                <button className = "Settings__Form--Addbtns">Add</button>
                <button className = "Settings__Form--Deletebtns">Delete</button>
            </form>
        </div>
    );}
};

export default AddDeleteStudents;