import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
// import Techs from "../Techs/Techs";
// import AboutMe from "../AboutMe/AboutMe";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import "./Main.css";


const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </main>
    </>
  );
};

export default Main;
