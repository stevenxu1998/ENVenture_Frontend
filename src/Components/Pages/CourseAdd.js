import React from 'react';

//importing css files.....
import '../../CSS/style.css';

//importing all pages for the tabs....
import AddDeleteStudents from './AddDeleteStudents';
import AddDeleteCourse from './AddDeleteCourse';
import AddDeleteCourseContent from './AddDeleteCourseContent';
import AddDeleteAnnouncements from './AddDeleteAnnouncements';
import AddDeleteTeachers from './AddDeleteTeachers';
//importing the tab functionalities
import {Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backGroundColor: theme.palette.background.paper,
    },
}));

const CourseAdd = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) =>{
        setSelectedTab(newValue);
    };

    return(
        <>
        <div className ="CourseAdd__TabList">
        <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label = "Add/Delete Students"/>
            <Tab label = "Add/Delete Course"/>
            <Tab label = "Add/Delete Course Content"/>
            <Tab label = "Add/Delete Announcements"/>
            <Tab label = "Add/Delete Teachers"/> 
            {/* add the 'disabled' keyword at the end of the tab tags */}
        </Tabs>
        </div>
        {selectedTab == 0 && <AddDeleteStudents/>}
        {selectedTab == 1 && <AddDeleteCourse/>}
        {selectedTab == 2 && <AddDeleteCourseContent/>}
        {selectedTab == 3 && <AddDeleteAnnouncements/>}
        {selectedTab == 4 && <AddDeleteTeachers/>}
        {/* {selectedTab == 4 &&} */}
        </>
    );
};

export default CourseAdd;