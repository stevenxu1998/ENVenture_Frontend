import React, {Component} from 'react';

//importing to do list files 
import Form from "../Pages/LogisticsToDoForm";

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class LogisticsToDoList extends Component{
    render(){
        return(
        <div>
            <section className = "LogisticsToDoList">
                <h3>To Do List</h3>
                <li>none</li>
                {/* this is where the to do form goes */}
            </section>
            <Form />
        </div>
        )
    }
}

export default LogisticsToDoList;