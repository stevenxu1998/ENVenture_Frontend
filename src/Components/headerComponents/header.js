import React from 'react';

//importing images.....
import logo from '../../IMG/logo.jpg';

//importing css files.....
import '../../CSS/style.css';

//import the links....
import {
  Link
}from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className = "Header">
        <a href = "#"><img src= {logo} alt="ENVenture Logo"id = "Header__Logo"/></a>
        <div className="headerDropDownMenu">
          <button className="headerDropDownMenu__btn"><h1 className ="headerDropDownMenu__Name">default name</h1></button>
          <div className="headerDropDownMenu__Content">
            <Link to="/UserProfile">User Profile</Link>
            <Link to='/Settings'>Settings</Link>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;