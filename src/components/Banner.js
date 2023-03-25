import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { TypeAnimation } from "react-type-animation";
import bethackerlogo from "../assets/img/bethackerlogo.svg";
import HTML from '../assets/img/HTML.png';
import CSS from '../assets/img/CSS.png';
import JS from '../assets/img/JS.png';
import Bootstrap from '../assets/img/Bootstrap.png';
import Reacti from '../assets/img/Reacti.png';
import NodeJS from '../assets/img/NodeJS.png';
import Express from '../assets/img/Express.png';
import Contact from "./Contact";




export const Banner = () => {
    const [text, setText] = useState('');
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 1000;

    
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Beth!`}</h1>
                                    <h2>
                                        <TypeAnimation
                                            sequence={[
                                                'Web Developer...',
                                                1000,
                                                'Web Designer...',
                                                1000,
                                                'UI/UX Designer...',
                                                1000
                                            ]}
                                            wrapper="div"
                                            cursor={true}
                                            repeat={Infinity}
                                        />
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                            
        
                                    <button className="banner-button" href="#contact">
  Send A Message! <ArrowRightCircle size={25} />
</button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img src={headerImg} alt="Header Img" className="header-img bounce" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <section className="about" id="about">
                <div className="row no-gutters">
                    <div className="col"> <img src={HTML} alt="HTML" /></div>
                    <div className="col"> <img src={CSS} alt="CSS" /></div>
                    <div className="col"> <img src={JS} alt="JavaScript" /></div>
                    <div className="col d-none d-lg-block"> <img src={Bootstrap} alt="Bootstrap" /></div>
                    <div className="col"> <img src={Reacti} alt="React" /></div>
                    <div className="col"> <img src={NodeJS} alt="Node.js" /></div>
                    <div className="col"> <img src={Express} alt="Express" /></div>
                </div>
            </section>
            <div className = "insertcontact">
            <Contact />
            </div>
        </section>
    
        

    );
}

export default Banner;
