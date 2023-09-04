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
      <label className="header__burger-menu">
        <input className="header__burger-check" type="checkbox" />
        <span className="header__burger-btn"/>
        <ul className="header__burger-ul" >
          {headerTemplate}
        </ul>
      </label>
    </div>
  )
};

export default Header;
