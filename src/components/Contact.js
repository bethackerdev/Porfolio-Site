import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import NorthernVirginia from "../assets/img/NorthernVirginia.png";
import ContactForm from "./ContactForm";

export const Contact = () => {
    

return(

<div>
<section className="contact">
        <Container>
            <Row>
                <Col xs={12} md={6}>
                <h3 className="contacthead">Reach Out!</h3>
                    <ContactForm/>
                </Col>
                <Col xs={12} md={6}>
                    <h3 className="contacthead2">Located In</h3>
                    <img src={NorthernVirginia} alt="nova" />
                </Col>
            </Row>
        </Container>
    </section>
    </div>

)
}


export default Contact; 