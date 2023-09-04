import React from "react";
import NavTab from "../NavTab/NavTab";

// import NavTab from "../NavTab/NavTab";
import "./Promo.css";
import {ReactComponent as LandingLogo} from '../../images/landing-logo.svg';


const Promo = () => {
  return (
    <div className="promo">
      <section className="promo main__promo">
        <div className="promo__main-wrapper">
          <div className="promo__left-wrapper">
            <h1 className="promo__text">
              Учебный проект студента<br/>  факультета Веб-<br/> разработки.
            </h1>
            <p className="promo__description">
              Листайте ниже, чтобы узнать больше про этот проект
              <br/> и его создателя.
            </p>
          </div>
          <div className="promo__right-wrapper">
            <LandingLogo className="promo__landing-logo"/>
          </div>
        </div>
        <div className="promo__bottom-wrapper">
          <button className="promo__nav-button">
            Узнать больше
          </button>
          <NavTab />
        </div>
      </section>
    </div>
  );
};

export default Promo;
