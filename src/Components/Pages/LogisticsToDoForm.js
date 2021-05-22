import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class LogisticsToDoForm extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

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
        <div>
            <section className = "LogisticsToDoForm">
                <h3><b>Add a Task</b></h3>
                <form onSubmit = {this.handleSubmit}>
                    <label for = "ToDoTask" className ="">Add a To Do Task:</label><br></br>
                    <input type="text" name = "ToDoTask" id = "ToDoTask" placeholder="Your Task.."/> <br></br>
                    <label for = "ToDoDate" className ="">Due Date(mm/dd/yyyy):</label><br></br>
                    <input type="text" name = "ToDoDate" id = "ToDoDate" placeholder="(mm/dd/yyyy)"/>
                    <button className = "LogisticsToDoList__Form--AddBtn">Add</button>
                </form>
                <h3><b>Delete a Task</b></h3>
                <form onSubmit = {this.handleSubmit}>
                    <label for = "ToDoTask" className ="">Delete a To Do Task:</label><br></br>
                    <input type="text" name = "ToDoTask" id = "ToDoTask" placeholder="Your Task.."/> <br></br>
                    <label for = "ToDoDate" className ="">Due Date(mm/dd/yyyy):</label><br></br>
                    <input type="text" name = "ToDoDate" id = "ToDoDate" placeholder="(mm/dd/yyyy)"/>
                    <button className = "LogisticsToDoList__Form--DeleteBtn">Delete</button>
                </form>
            </section>
        </div>
        )
    }
}

export default LogisticsToDoForm;