import React, { useState } from "react";
import openInNewTab from '../Logic/linkNewtab.js'
const Header = () => {
  // Separate states for each button
  const [selectedTab, setSelectedTab] = useState(null);

  const content = {
    About: <p className="aboutContent">Born and Raised in Texas, I am a dedicated, multitalented software developer with a desire to create efficient and innovative solutions. With a strong ability to learn quickly, I'm constantly developing my knowledge and refining my abilities. While I'm comparatively early in my professional journey, my training and dedication to learning drive me forward. Besides coding, I volunteer with a non-profit lion dance organization, merging team collaboration, industriousness, and artistry into my daily life.</p>,
    Projects: (
    <ul className="projectList">
        <li>
            <h3>77 Physique</h3>
            <h4>Date Mar-2025</h4>
            <p>a fitness discussion forum for athletes of all levels. It aims to foster a supportive and informative community where users can track their progress, share workout tips, and ask fitness-related questions.</p>
        </li>
        <li>
            <h3>Backyard Tally</h3>
            <h4>Dec 2024</h4>
            <p>The ultimate online leaderboard and scorekeeper for cornhole enthusiasts, designed to bring a competitive edge to every backyard game. With real-time scoring, detailed player stats, and custom leaderboards, it’s never been easier to track your victories and climb the ranks. Share your wins, revisit match history, and even compete globally—all from a sleek, mobile-friendly platform. Whether you're playing casually with friends or vying for top bragging rights, Backyard Tally ensures every toss counts. Let the games begin!</p>
        </li>
    </ul>),
    Contact: (
        <div>
            <a onClick={() => openInNewTab('https://www.linkedin.com/in/bvonnied/')}><img src="src/Resource/images/linkedin-logo.png"></img></a>
            <a onClick={() => openInNewTab('https://www.instagram.com/benlenvon/')}><img src="src/Resource/images/Insta-logo.png"></img></a>
            <p>Email: bvonnied@gmail.com</p>
        </div>
    )
  }

  return (
    <header>
      <div className="header-content">
      <h1>Benjamin Vonniederhausern</h1>
      <h3>Simple and efficient</h3>
      </div>
      <nav>
        <ul>
          {["About", "Projects", "Contact"].map((item) => (
            <li
            key={item}
            className={`nav-item ${selectedTab === item ? "selected" : ""}`}
            onClick={() => setSelectedTab(selectedTab === item ? null : item)}
            >
              {selectedTab === item ? (
                <img src="src/Resource/images/lion-dance.png" alt="" />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </nav>


      {selectedTab && (
        <div className="content-container">
            <h2 className="content-title">{selectedTab}</h2>
            {content[selectedTab]}
        </div>
      )}
    </header>
  );
};

export default Header;






