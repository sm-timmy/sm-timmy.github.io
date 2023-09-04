import React from "react";

import "./Progress.css";


const Progress = () => {
  return (
    <div className="progress">
      <div className="progress__row">
        <div className="progress__left-row">
          <p className="progress__text">
            1 неделя
          </p>
        </div>
        <div className="progress__right-row">
          <p className="progress__text">
            4 недели
          </p>
        </div>
      </div>
      <div className="progress__row">
        <div className="progress__left-description">
          <p className="progress__text-description">
            Back-end
          </p>
        </div>
        <div className="progress__right-description">
          <p className="progress__text-description">
            Front-end
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
