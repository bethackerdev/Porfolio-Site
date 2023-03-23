import React from "react";
import HTML from '../assets/img/HTML.png';
import CSS from '../assets/img/CSS.png';
import JS from '../assets/img/JS.png';
import Bootstrap from '../assets/img/Bootstrap.png';
import Reacti from '../assets/img/Reacti.png';
import NodeJS from '../assets/img/NodeJS.png';
import Express from '../assets/img/Express.png';

export const About =() => {
  return (
    <section className="about" id="home">
    <div class="container">
    <div class="row">
      <div class="col col-1"> <img src={HTML} alt="alt text" /></div>
      <div class="col col-1"> <img src={CSS} alt="alt text" /></div>
      <div class="col col-1"> <img src={JS} alt="alt text" /></div>
      <div class="col col-1"> <img src={Bootstrap} alt="alt text" /></div>
      <div class="col col-1"> <img src={Reacti} alt="alt text" /></div>
      <div class="col col-1"> <img src={NodeJS} alt="alt text" /></div>
      <div class="col col-1"> <img src={Express} alt="alt text" /></div>
    </div>
  </div>
  </section>
  
  );
}

export default About;