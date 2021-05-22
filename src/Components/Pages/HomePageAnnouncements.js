import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class Announcements extends Component{
    render(){
        return(
            <section className = "Announcements">
                <h3>Announcements</h3>
                <p>none</p>
            </section>
        )
    }
}

export default Announcements;