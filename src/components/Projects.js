import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import RISCVimg from "../assets/img/RISC-V-img.png";
import SurfingImg from "../assets/img/Surfing-Proj-img.jpeg";
import CoffePMimg from "../assets/img/Coffee-PM-img.png";

import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Pentesting - Hands on",
      description: "Vulnerability assessment and exploitation of MS17-010 SMB",
      imgUrl: projImg1,
      link: "https://github.com/AlbertoChar/MS17-010-SMB",
    },
    {
      title: "Movement Authority ERTMS/ETCS",
      description: "Simulation of ERTMS/ETCS Movement Authority with threads and processes.",
      imgUrl: projImg2,
      link: "https://github.com/AlbertoChar/Rail-Control-System",
    },
    {
      title: "Pizza Management System",
      description: "Simulates a pizza management system applying OOP, SOLID, DP in Java",
      imgUrl: projImg3,
      link: "https://github.com/AlbertoChar/PizzaManagementDesignPatterns",
    },
    {
      title: "RISC-V Cipher",
      description: "Encrypting and decrypting messages through different kinds of algorithms",
      imgUrl: RISCVimg,
      link: "https://github.com/AlbertoChar/RISC-V-Cipher",
    },
    {
      title: "Surfing Conditions",
      description: "Real-time ocean condition fetching directly to your calendar widget",
      imgUrl: SurfingImg,
      link: "https://github.com/AlbertoChar/Surfing-Conditions-Calendar",
    },
    {
      title: "Coffee house management system",
      description: "Simulates a coffee house management system applying OOP, SOLID, DP in Java",
      imgUrl: CoffePMimg,
      link: "https://github.com/AlbertoChar/CoffeeManagementSystem"
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h2>Projects</h2>
                  <p>All projects were developed by me, including this webpage!</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-0 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Row style={{ height: "40px" }}></Row>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Pane eventKey="section">
                <p>For my full repository of projects, follow me on Github, Linkedin.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <p>All projects can be accessed through Github.</p>
                <p>Requests and inquiries can be made through the contact details on this webpage.</p>
              </Tab.Pane>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
