import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
const CourseQuizzes = () => {
    return (
        <div className = "CourseQuizzes">
            <h2 className = "CourseQuizzes__Title">Course Quizzes</h2>
            <table>
                <tr>
                    <th>Quiz Item</th>
                    <th>Quiz Link</th>
                    <th> Quiz Description</th>
                    <th>Completed?</th>
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

export default CourseQuizzes;