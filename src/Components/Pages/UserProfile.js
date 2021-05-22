import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';
//importing images
import Avatar from '../../IMG/Avatar.jpg';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class UserProfile extends Component{
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

        fetch('/Course', {
            // chance course to something else that needs to be updated
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
        return(
            <section className = "UserProfile">
                <h3>User Profile</h3>
                <img src={Avatar} className ="UserProfile__UserPic"></img>
                <div>
                    <button className = "UserProfile__ChangeProfilebtn">Change User Profile Image</button>
                </div>
                <h4>Contact Information</h4>
                <form onSubmit = {this.handleSubmit}>
                    <label for = "NickName" className = "Settings__Form--Text">NickName</label><br></br>
                    <input name = "NickName" id = "NickName"/><br></br>
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
                    <button className = "Settings__Form--Savebtns">Save and Close</button>
                    <button className = "Settings__Form--Savebtns">Save</button>
                    <button className = "Settings__Form--Savebtns">Close</button>
                </form>
            </section>
        )
    }
}

export default UserProfile;