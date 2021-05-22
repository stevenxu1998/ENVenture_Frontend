import React from 'react';

//importing images.....
import LargerLogo from "../../IMG/Larger_Logo.jpg";

//importing other react js files....
import Announcements from "../Pages/HomePageAnnouncements";

//importing css files.....
import '../../CSS/style.css';

function HomePage() {
  return (
    <div>
      <section className = "HomePageContent">
          <article className = "HomePageContent__welcomeSection">
              <div className = "HomePageContent__welcomeMessage">
              <div className = "HomePageContent__item">
                  <img src = {LargerLogo} alt = "Enventure Logo" id = "HomePage__Logo"/>
              </div>
                  <h2>Welcome to the Omprakash Enventure!</h2>
                  <p>EdGE (Education through Global Engagement) is an online learning platform run by Omprakash, a network of people and social impact organizations around the world.
                  We at Omprakash are proud to be able to offer this custom EdGE training for participants of the ENVenture Business Development Fellowship!</p>
                  <p>As an ENVenture Fellow, you have a public Omprakash profile which can be found by searching your name here.  
                  We encourage you to edit your profile by navigating to your Main Dashboard via the hover menu in the upper-right of your screen. 
                  From your Main Dashboard, you can also start crowdfunding campaigns, write blog posts, and engage in our Global Dialogue forum.  </p>
                  <p>We are very excited to begin learning with you! But first, let's take a moment to get familiar with the EdGE classroom.</p>
              </div>
          </article>
          <div className = "HomePageContent__Courses">
            <h3>
              Courses
            </h3>
          </div>
      </section>
      <Announcements/>
    </div>
  );
}

export default HomePage;