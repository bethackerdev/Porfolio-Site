import React from "react";
import Container from "react-bootstrap/Container";
import NorthernVirginia from '../assets/img/NorthernVirginia.png';

const About = () => {
  return (
    <section className="about" id="home">
      <div className="row">
        <div className="col-8 about-me">
          <h1>A Little About Me </h1>
        </div>
        <div className="col-4 location">
        <h1>Located In </h1>
        <img src={NorthernVirginia} width="500" height="500" alt="Northern-VA" />
        </div>
      </div>
    </section>
  );
};

export default About;
