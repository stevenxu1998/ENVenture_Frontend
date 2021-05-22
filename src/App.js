import React from 'react';
import Header from "./Components/headerComponents/header.js";
import SideMenu from "./Components/headerComponents/SideMenu";
import HomePage from "./Components/Pages/HomePage";
import Logistics from "./Components/Pages/LogisticsToDoList";
import Settings from "./Components/Pages/Settings";
import Course from "./Components/Pages/Course";
import UserProfile from './Components/Pages/UserProfile';
import CssBaseLine from "@material-ui/core/CssBaseline";

//import the links....
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

//import logistic page and the rest of the pages....

function App() {
  return (
    <Router>
      <div className="ENVenture Website">

        <Header />
        <SideMenu />
        <CssBaseLine />
        <Route exact path = '/' component={HomePage}/>
        <Route exact path = '/Logistics' component={Logistics}/>
        <Route exact path = '/Settings' component={Settings}/>
        <Route exact path = '/Course' component={Course}/>
        <Route exact path = '/UserProfile' component={UserProfile}/>

        
      </div>
    </Router>
  );
}

export default App;
