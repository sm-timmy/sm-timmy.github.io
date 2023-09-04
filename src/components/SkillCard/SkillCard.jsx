import React from "react";
import "./SkillCard.css";

const SkillCard = ({title}) => {
  return (
    <div className="skill-card">
        <p className="skill-card__text">{title}</p>
    </div>
  )
};

export default SkillCard;