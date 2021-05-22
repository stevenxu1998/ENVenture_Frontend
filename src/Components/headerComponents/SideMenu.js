import React from 'react';
import HomePage from "../Pages/HomePage";

//importing images.....
import logo from '../../IMG/logo.jpg';
import notification from '../../IMG/Notification.jpg';

//import the links....
import {
  Link
}from 'react-router-dom';

//importing css files.....
import '../../CSS/style.css';

//importing the js file
//import Dropdown from '../headerComponents/SideBar-Dropdown';

function sideDrop() {
  //alert("Hello!,you clicked me");
  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("sideMenu__DropDownbtn");

  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.parentElement.parentElement.nextElementSibling;
    //var dropdownContent = document.getElementsByClassName("sideMenu__DropDownContent");
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }
}

function SideMenu() {
  return (
    <section className = "sideMenu">
      <nav className = "sideMenu__Navigation">
        <ul className = "sideMenu__List">
          <li className = "sideMenu__Link">
            <Link to='/' className = "sideMenu__LinkName">Home</Link>
          </li>
          <li className = "sideMenu__Link">
            <Link to='/Logistics' className = "sideMenu__LinkName">Logistics</Link>
          </li>
          <li className = "sideMenu__Link">
            <div className="sideMenu__DropDown">
              <button className = "sideMenu__DropDownbtn" onMouseMove = {sideDrop}><a href = "#" className = "sideMenu__LinkName">Courses</a></button>
              {/* <div class="sideMenu__DropDownContent">
                <li><a href="#">default class 1</a></li>
                <li><a href="#">default class 2</a></li>
                <li><a href="#">default class 3</a></li>
              </div> */}
            </div>
          </li>
          <li className = "sideMenu__Link" id = "sideMenu__DropDownContent">
              <li><Link to='/Course' className = "sideMenu__LinkName">default class 1</Link></li>
              <li><a href="#" className = "sideMenu__LinkName">default class 2</a></li>
              <li><a href="#" className = "sideMenu__LinkName">default class 3</a></li>
          </li>
          <li className = "sideMenu__Link">
            <Link to='/Settings' className = "sideMenu__LinkName">Settings</Link>
          </li>
          <li className = "sideMenu__Link">
            <a href = "#" className = "sideMenu__LinkName">Chat</a>
          </li>
          {/* <li className = "sideMenu__Link">
            <li><a href = "#" className = "sideMenu__LinkName">Testing</a></li>
            <li><a href = "#" className = "sideMenu__LinkName">Testing</a></li>
          </li> */}
        </ul>
      </nav>
      {/* <script type = "text/javascript" src = {Dropdown}></script> */}
      {/* for the external javascript */}
    </section>
  );
}

export default SideMenu;
