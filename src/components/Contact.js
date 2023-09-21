import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
    const contactInfoStyle = {
      fontSize: '16px', // Adjust the font size as needed
      lineHeight: '1.5', // Adjust the line height as needed
    };
  
    return (
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="Contact Me" />
            </Col>
            <Col md={6}>
              <h2>Get In Touch</h2>
              <Row>
                <div style={contactInfoStyle}>
                  <p>
                    <b>Email:</b> bcharabati@gmail.com
                  </p>
                  <p>
                    <b>LinkedIn:</b> Alberto Charabati
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  