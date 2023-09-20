import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={10} md={11}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div>
                    <h4> {title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}