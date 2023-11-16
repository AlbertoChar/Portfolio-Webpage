import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
    const contactInfoStyle = {
      fontSize: '16px', // Adjust the font size as needed
      lineHeight: '1.5', // Adjust the line height as needed
    };
  
    return (
      <section className="contact" id="contact">
          <Row className="align-items-center">
            <Col md={5}>
              <img src={contactImg} alt="Contact Me" />
            </Col>
            <Col xs={3} md={6} xl={6}>
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
      </section>
    );
  };
  