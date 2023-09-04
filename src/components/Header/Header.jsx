import React from "react";
import {headerTabs} from "../../utils/constants.js"

import "./Header.css";
import {ReactComponent as HeaderLogo} from '../../images/logo.svg';


const Header = () => {
  let state = "authorized";

  const headerTemplate = headerTabs.map(function (item, index) {
    if (state == "authorized") {
      if (index <= 1)
        return "";
    }
    else {
      if (index > 1)
        return "";
    }
    return (
      <a className="header__link" href={item.url}>
        <li className="header__item" key={item.id} data-id={item.id} >
            {item.text}
        </li>
      </a>
    )
  })

  return (
    <div className="header">
      <HeaderLogo/>

      <ul className="header__buttons-list">
        {headerTemplate}
      </ul>
      <label className="header__menu">
        <input type="checkbox" />
        <div className="header__menu-lines">
          <span className="header__menu-line line-1"/>
          <span className="header__menu-line line-2"/>
          <span className="header__menu-line line-3"/>
        </div>
        <div className="header__menu-items">
          <ul>
            {headerTemplate}
          </ul>
        </div>
      </label>
    </div>
  )
};

export default Header;
