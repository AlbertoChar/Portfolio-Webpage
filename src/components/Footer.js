import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/Logo-img.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <div className="rounded-pill">
            <img src={logo} alt="Logo" />
          </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alberto-charabati-53a140200" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/BetoChar" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://instagram.com/alberto_charr?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://github.com/AlbertoChar" target="_blank" rel="noopener noreferrer"><img width="80" height="80" src="https://img.icons8.com/ios-filled/80/000000/github.png" alt="github" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}