import React from "react";
import {projectTabs} from "../../utils/constants.js"
import {aboutTabs} from "../../utils/constants.js"
import TextBlock from "../TextBlock/TextBlock.jsx";
import Title from "../Title/Title.jsx";

import "./AboutProject.css";
import Progress from "../Progress/Progress.jsx";


const AboutProject = () => {

  return (
    <div className="about">
      <Title title={projectTabs[0].text} url={projectTabs[0].url.substring(1)} />
      <div className="container">
        {aboutTabs.map(function (item, index) {
          return (
            <TextBlock key={item.id} title={item.title} description={item.description}/>
          )
        })}
      </div>
      <Progress/>     
    </div>
  )
};

export default AboutProject;
