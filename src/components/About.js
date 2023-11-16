import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import colorSharp from '../assets/img/color-sharp.png';
import surfImg from "../assets/img/Surf-Me.jpg";

function About() {
  return (
    <section className="about" id="about" style={{ background: `url(${colorSharp}) no-repeat center center fixed`, backgroundSize: 'cover', paddingTop: '150px' }}>
      <Container>
        <Row>
        <Col xs={5} md={3} xl={3}>
            <div className="rounded-image-container">
              <img src={surfImg} alt="Surfing" className="img-fluid rounded-image" />
            </div>
          </Col>
          <Col xs={12} md={8} xl={7}>
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I am a Computer Science graduate from the University of Florence, Italy, specializing in cybersecurity and penetration testing. My journey into the world of technology has been marked by a commitment to delivering accurate and practical solutions, drawing upon diverse knowledge bases.
              </p>
              <p>
                With a background in the Israeli Defense Forces (IDF), where I served for three years as a training commander in the Navy and as a Krav Maga trainer, I developed strong leadership skills and a disciplined approach to challenges.
              </p>
              <p>
                After completing my military service, I embarked on a new adventure by moving to Florence, Italy, to pursue my passion for computer science. Studying in Italian, my fourth language (in addition to Spanish, English, and Hebrew), required me to be a fast learner and self-teaching capabilities. It also showcased my creative problem-solving skills, as I navigated a foreign country and language.
              </p>
              <p>
                Beyond my technical pursuits, I am fascinated by the Renaissance, art, and history. In my free time, you'll find me surfing. I thrive on taking on new challenges, continuously learning, and pushing myself to new heights. As a cybersecurity enthusiast, I enjoy combining knowledge from various areas and thinking outside the box to address complex issues.
              </p>
              <p>
                Beyond the technical bits, I'm a people person and a team player. Let's connect, have a chat, and maybe even grab a coffee! I'm always excited to explore new horizons and contribute my skills to meaningful projects or connections.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

