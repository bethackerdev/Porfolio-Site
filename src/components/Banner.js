import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { TypeAnimation } from "react-type-animation";


export const Banner = () => {
    const [text, setText] = useState('');
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 1000;


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Beth!`}</h1>
                                    <h2><TypeAnimation
                                        sequence={[
                                            'Web Developer...', 
                                            1000, 
                                            'Web Designer...', 
                                            1000, 
                                            'UI/UX Designer...', 
                                            1000,
                                            () => {
                                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                            }
                                        ]}
                                        wrapper="div"
                                        cursor={true}
                                        repeat={Infinity}

                                    /></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner; 
