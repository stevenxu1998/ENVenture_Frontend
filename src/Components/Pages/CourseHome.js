import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class CourseHome extends Component {
    render(){
    return (
        <div className = "CourseHome">
            <section className = "CourseHome__Header">
                <h3>Course Home</h3>
            </section>
            <h3 className = "CourseHome__Announcements--Title">Announcements</h3>
            <div className = "CourseHome__Announcements--Content">
                <p>none</p>
            </div>
        </div>
    );}
};

export default CourseHome;