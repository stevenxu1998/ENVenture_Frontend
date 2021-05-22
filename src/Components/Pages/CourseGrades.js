import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
const CourseGrades = () => {
    return (
        <div className = "CourseGrade">
            <h2 className = "CourseGrade__Title">Course Grades</h2>
            <table>
                <tr>
                    <th>Grade Item</th>
                    <th>Points</th>
                    <th>Weight Achieved</th>
                    <th>Grade</th>
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

export default CourseGrades;