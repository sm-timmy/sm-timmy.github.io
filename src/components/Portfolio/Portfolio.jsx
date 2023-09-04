import React from "react";
import {portfolioTabs} from "../../utils/constants.js"

import "./Portfolio.css";
import {ReactComponent as LandingLogo} from '../../images/landing-logo.svg';

const Portfolio = () => {

  const portfolioTemplate = portfolioTabs.map(function (item, index) {
    return (
      <a target="_blank" key={item.id} href={item.url} className="portfolio__item">
        <div className="portfolio__left-wrapper">
          <h3 className="portfolio__item-title">
            {item.title}
          </h3>
          <p className="portfolio__item-about">
            {item.about }
          </p>
        </div>
        <img className="portfolio__item-img" src={item.img_url} alt={item.title} />
      </a>
    )
  })

  return (
    <div className="portfolio">
        <p className="portfolio__title">
          Портфолио
        </p>
        {portfolioTemplate}
    </div>
    
  )
};

export default Portfolio;
