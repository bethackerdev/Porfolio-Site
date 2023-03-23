Q
import { Container, Row, Col } from 'react-bootstrap';

export const SkillList = () => {
  return (
    <section className="about" id="home">
      <div className="row">
        <div className="col-6 about-me">
          <h1>A Little About Me</h1>
          <Container>
            <Row className="justify-content-center">
              <Col xs={3} md={1}>
                <img src={CSS} alt="CSS" width="50" height="50" />
              </Col>
              <Col xs={3} md={1}>
                <img src={HTML} alt="HTML" width="50" height="50" />
              </Col>
              <Col xs={3} md={1}>
                <img src={JS} alt="JS" width="50" height="50" />
              </Col>
              <Col xs={3} md={1}>
                <img src={Bootstrap} alt="Bootstrap" width="50" height="50" />
              </Col>
              <Col xs={3} md={1}>
                <img src={Reacti} alt="React" width="50" height="50" />
              </Col>
              <Col xs={3} md={1}>
                <img src={NodeJS} alt="NodeJS" width="50" height="50" />
              </Col>
              <Col xs={3} md={1}>
                <img src={Express} alt="Express" width="50" height="50" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default SkillList;