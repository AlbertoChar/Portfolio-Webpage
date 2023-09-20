import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                <b>● Skilled in Python, Java, OOP, Databases, SQL, Linux, Web Applications, C, RISC V, Docker, and Cloud computing services (AWS).</b><br />
                                <hr /> {/* Add a horizontal line */}
                                <b>● Completed a cyber-oriented Computer Science program with a master's degree-course in Penetration Testing, which I concluded by demonstrating a full Windows machine exploitation (CVE-2020-1472) using a Kali VM.</b><br />
                                <hr /> {/* Add a horizontal line */}
                                <b>● Built a case study for DDS middleware communication protocol using pub-sub algorithms with Java and Python bindings and currently writing a thesis on the subject.</b><br />
                                <hr /> {/* Add a horizontal line */}
                                <b>● Experienced in identifying web vulnerabilities (protocols, cookies, SQLi), reverse engineering (IDA), and vulnerability assessment and exploitation tools (Nessus, Metasploit, backdoor opening, reverse-shell, etc).</b><br />
                                <hr /> {/* Add a horizontal line */}
                                <b>● Developed a broad perspective on problem-solving and decision-making through exposure to diverse viewpoints while studying in Florence.</b><br />
                                <hr /> {/* Add a horizontal line */}
                                <b>● Embraced challenges and achieved academic success while immersing myself in a foreign language and culture during my degree pursuit from Israel to Florence.</b>
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img width="96" height="96" src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/96/external-software-developer-data-analytics-flaticons-flat-circular-flat-icons.png" alt="external-software-developer-data-analytics-flaticons-flat-circular-flat-icons" />
                                    <h5> Software Development </h5>
                                </div>
                                <div className="item">
                                    <img width="96" height="96" src="https://img.icons8.com/pulsar-color/96/programming.png" alt="programming" />
                                    <h5> Web Development </h5>
                                </div>
                                <div className="item">
                                    <img width="96" height="96" src="https://img.icons8.com/color/96/hacking.png" alt="hacking" />
                                    <h5> Penetration Testing </h5>
                                </div>
                                <div className="item">
                                    <img width="96" height="96" src="https://img.icons8.com/color/96/sql.png" alt="sql" />
                                    <h5> Databases </h5>
                                </div>
                                <div className="item">
                                    <img width="96" height="96" src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/96/external-penetration-testing-agile-development-smashingstocks-mixed-smashing-stocks.png" alt="external-penetration-testing-agile-development-smashingstocks-mixed-smashing-stocks" />
                                    <h5> Vulnerability Exploitation and Assesment </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}