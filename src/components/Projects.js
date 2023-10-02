import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import React, { useState } from "react";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import RISCVimg from "../assets/img/RISC-V-img.png";
import SurfingImg from "../assets/img/Surfing-Proj-img.jpeg";
import CoffePMimg from "../assets/img/Coffee-PM-img.png";
import ReactImg from "../assets/img/React-proj-img.jpeg";
import travelImg from "../assets/img/travel-img.png";

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
      title: "Surfing Conditions",
      description: "Real-time ocean condition fetching directly to your calendar widget",
      imgUrl: SurfingImg,
      link: "https://github.com/AlbertoChar/Surfing-Conditions-Calendar",
    },
    {
      title: "Movement Authority ERTMS/ETCS",
      description: "Simulation of ERTMS/ETCS Movement Authority with threads and processes.",
      imgUrl: projImg2,
      link: "https://github.com/AlbertoChar/Rail-Control-System",
    },
    {
      title: "ReactJS Webpage",
      description: "Portfolio webpage developed in ReactJS",
      imgUrl: ReactImg,
      link: "https://github.com/AlbertoChar/Portfolio-Webpage",
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
      title: "Coffee house management system",
      description: "Simulates a coffee house management system applying OOP, SOLID, DP in Java",
      imgUrl: CoffePMimg,
      link: "https://github.com/AlbertoChar/CoffeeManagementSystem"
    },
    {
      title: "Travel Agency- Concurrency",
      description: "Concurrency and synchronization in Java with semaphores",
      imgUrl: travelImg,
      link: "https://github.com/AlbertoChar/Travel-Agency-Semaphores",
    },
  ];

  // Define the number of projects to display per tab
  const projectsPerPage = 6;

  // Calculate the number of tabs needed based on the projects and projectsPerPage
  const numTabs = Math.ceil(projects.length / projectsPerPage);

  // Create an array of tab keys ("first", "second", "third", etc.)
  const tabKeys = Array.from({ length: numTabs }, (_, index) => String(index + 1));

  // Initialize the active tab
  const [activeTab, setActiveTab] = useState(tabKeys[0]);

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
            <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
              <Nav variant="pills" className="nav-pills mb-0 justify-content-center align-items-center" id="pills-tab">
                {tabKeys.map((tabKey) => (
                  <Nav.Item key={tabKey}>
                    <Nav.Link eventKey={tabKey}>Tab {tabKey}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Row style={{ height: "40px" }}></Row>
              <Tab.Content>
                {tabKeys.map((tabKey) => (
                  <Tab.Pane eventKey={tabKey} key={tabKey}>
                    <Row>
                      {projects.slice((tabKey - 1) * projectsPerPage, tabKey * projectsPerPage).map((project, index) => (
                        <Col key={index} sm={6} md={4}>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            <ProjectCard key={index} {...project} />
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};