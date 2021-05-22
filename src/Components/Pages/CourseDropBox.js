import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
const CourseDropBox = () => {
    return (
        <div className = "CourseDropBox">
            <h2 className = "CourseDropBox__Title">Course DropBox</h2>
            <table id= "DropBox">
                <tr>
                    <th>Assignment Item</th>
                    <th>Assignment Description</th>
                    <th>File Submission</th>
                    <th>Submitted?</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default CourseDropBox;