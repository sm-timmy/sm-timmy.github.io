import React from "react";
import "./Title.css";


const Title = ({title, url}) => {

  return (
    <div id={url} className="title">
      <p>{title}</p>
    </div>
  )
};

export default Title;
