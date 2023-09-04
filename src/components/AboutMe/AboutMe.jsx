import React from "react";
import {projectTabs} from "../../utils/constants.js"
import {devTabs} from "../../utils/constants.js"
import Portfolio from "../Portfolio/Portfolio.jsx";
import TextBlock from "../TextBlock/TextBlock.jsx";
import Title from "../Title/Title.jsx";

import "./AboutMe.css";



const AboutMe = () => {

  return (
    <div className="about-me">
      <Title title={projectTabs[2].text} url={projectTabs[2].url.substring(1)}/>
      <div className="about-me__container">
        <div className="about-me__left-wrapper">
          <h1 className="about-me__name">
            {devTabs[0].name}
          </h1>
          <h3 className="about-me__profession">
            {devTabs[0].job}, {devTabs[0].age}
          </h3>
          <div className="about-me__description">
            {devTabs[0].about}
          </div>
          <a className="about-me__github-link" href={devTabs[0].url}>
            Github
          </a>
        </div>  
        <div className="about-me__right-wrapper">
          <img className="about-me__img">
            
          </img>
        </div>  
      </div>
      <Portfolio/>
    </div>
  )
};

export default AboutMe;
