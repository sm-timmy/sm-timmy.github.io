import React from "react";
import {projectTabs} from "../../utils/constants.js"
import {techTabs} from "../../utils/constants.js"
import SkillCard from "../SkillCard/SkillCard.jsx";
import TextBlock from "../TextBlock/TextBlock.jsx";
import Title from "../Title/Title.jsx";
import "./Techs.css";

const Techs = () => {

  const skillsTemplate = techTabs.map(function (item, index) {
    return (
      <SkillCard key={item.id} title={item.title}/> 
    )
  })

  return (
    <div className="main__wrapper">
      <div className="techs">
        <Title title={projectTabs[1].text} url={projectTabs[1].url.substring(1)}/>
        <div className="techs__banner">
          <h1 className="techs__title">
            7 технологий
          </h1>
          <p className="techs__description">
            На курсе веб разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <div className="techs__container">
          {skillsTemplate}
        </div>
      </div>
    </div>
  )
};

export default Techs;
