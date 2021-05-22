import React from 'react';

//importing css files.....
import '../../CSS/style.css';

//importing all pages for the tabs....
import CourseHome from './CourseHome';
import CourseContent from './CourseContent';
import CourseGrades from './CourseGrades';
import CourseQuizzes from './CourseQuizzes';
import CourseDropBox from './CourseDropBox';
import CourseClassList from './CourseClassList';
import CourseAdd from './CourseAdd';

//importing the tab functionalities
import {Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backGroundColor: theme.palette.background.paper,
    },
}));
  

const Course = () =>{
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) =>{
        setSelectedTab(newValue);
    };

    return(
        <>
        <div className ="Course__TabList">
        <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label = "Course Home"/>
            <Tab label = "Content"/>
            <Tab label = "Grades"/>
            <Tab label = "Quizzes"/>
            <Tab label = "Dropbox"/>
            <Tab label = "Classlist"/>
            <Tab label = "Add"/>
        </Tabs>
        </div>
        {selectedTab == 0 && <CourseHome/>}
        {selectedTab == 1 && <CourseContent/>}
        {selectedTab == 2 && <CourseGrades/>}
        {selectedTab == 3 && <CourseQuizzes/>}
        {selectedTab == 4 && <CourseDropBox/>}
        {selectedTab == 5 && <CourseClassList/>}
        {selectedTab == 6 && <CourseAdd/>}
        </>
    );
};

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
//this is to open all the tabs
// function openPage(pageName,elmnt){
//     //alert(pageName);
//     //console.log(pageName);
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("CoursePage__TabContent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("CoursePage__TabLink");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].style.backgroundColor = "";
//     }
//     document.getElementById(pageName).style.display = "block";
  
// }
// function Course(){
//     // Get the element with id="defaultOpen" and click on it
//     //document.getElementById("defaultOpen").click();
//     return(
//         <section className = "CoursePage">
//             <button className = "CoursePage__TabLink" id="defaultOpen">Course Home</button>
//             <button className = "CoursePage__TabLink">Content</button>
//             <button className = "CoursePage__TabLink">Grades</button>
//             <button className = "CoursePage__TabLink">Quizzes</button>
//             <button className = "CoursePage__TabLink">Dropbox</button>
//             <button className = "CoursePage__TabLink">ClassList</button>
//             <button className = "CoursePage__TabLink">Add</button>
//             <div id = "CourseHome" className = "CoursePage__TabContent">
//                 <h2>Course Home</h2>
//             </div>
//             <div id = "Content" className = "CoursePage__TabContent">
//                 <h2>Content</h2>
//             </div>
//             <div id = "Grades" className = "CoursePage__TabContent">
//                 <h2>Grades</h2>
//             </div>
//             <div id = "Quizzes" className = "CoursePage__TabContent">
//                 <h2>Quizzes</h2>
//             </div>
//             <div id = "Dropbox" className = "CoursePage__TabContent">
//                 <h2>Dropbox</h2>
//             </div>
//             <div id = "ClassList" className = "CoursePage__TabContent">
//                 <h2>ClassList</h2>
//             </div>
//             <div id = "Add" className = "CoursePage__TabContent">
//                 <h2>Add</h2>
//             </div>
//         </section>
//         )
//     }

export default Course;