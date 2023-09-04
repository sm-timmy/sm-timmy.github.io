import React from "react";

import "./TextBlock.css";


const TextBlock = ({title, description}) => {
 
  return (
      <div className="text-block">
        <h3 className="text-block__title">{title}</h3>
        <p className="text-block__description">{description}</p>
      </div>
  )
};

export default TextBlock;
