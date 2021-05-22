import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("CourseClassList__mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("CourseClassList__myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

class CourseClassList extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      students: []
    };
  }

  componentDidMount() {
    fetch("/Course")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            students: result.students
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    const { error, isLoaded, students } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
      console.log(error);
      console.log(error.message);
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else 
    return (
        <section className ="CourseClassList">
            <h2 className = "CourseClassList__Title">Course ClassList</h2>
            <div className = "CourseClassList__SearchMenu">
                <h2>Student Menu</h2>
                <input id="CourseClassList__mySearch" onKeyUp={myFunction} placeholder="Search.." title="Type in a category"/><br/>
                <ul id="CourseClassList__myMenu">
                    {/* <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">PHP</a></li>
                    <li><a href="#">Python</a></li>
                    <li><a href="#">jQuery</a></li>
                    <li><a href="#">SQL</a></li>
                    <li><a href="#">Bootstrap</a></li>
                    <li><a href="#">Node.js</a></li> */}
                    {students.map(student => (<li key={student.id}>
                    {student.firstName} {student.lastName} {student.email}
                    </li>))}

                </ul>
            </div>
            </section>
    );}
};

export default CourseClassList;