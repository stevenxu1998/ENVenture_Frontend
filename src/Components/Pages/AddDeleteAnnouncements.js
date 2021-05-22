import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class AddDeleteAnnouncements extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/Announcements', {
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
        <div className ="AddDeleteAnnouncements">
            <h2 className = "AddDeleteAnnouncements__Title">Add an Announcement to a Course</h2>
            <form onSubmit = {this.handleSubmit}>
                <label for = "ClassSearch" className = "Settings__Form--Text">Search Class: </label>
                        <select id = "ClassSearch" name = "ClassSearch">
                            <option value = "Default1">Default1</option>
                            <option value = "Default2">Default2</option>
                            <option value = "Default3">Default3</option>
                </select><br></br>
                <label className = "Settings__Form--Text"><b>Announcements</b></label><br></br>
                <textarea name="message" rows="10" cols="100"></textarea> <br></br>
                <button className = "Settings__Form--Addbtns">Add</button>
                <button className = "Settings__Form--Cancelbtns">Cancel</button>
            </form>
        </div>
    );}
};

export default AddDeleteAnnouncements;