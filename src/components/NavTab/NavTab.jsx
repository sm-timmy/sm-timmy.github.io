import React from "react";
import {projectTabs} from "../../utils/constants.js"

import "./NavTab.css";

const NavTab = () => {
  const tabsTemplate = projectTabs.map(function (item, index) {
    return (
      <a className="navigation__link" key={item.id} href={item.url}>
        {item.text}
      </a>
    )
  })

  return (
    <div className="navigation">
      {tabsTemplate}
    </div>
  )
};

export default NavTab;
