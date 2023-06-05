import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/restaurant.jpg";
import password from "../../Assets/Projects/password.jpg";
import movie from "../../Assets/Projects/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Random Password Generator"
              description="I made a Random Password Generator as one of my first simple projects, and still use it at times if I need a new password."
              ghLink="https://github.com/S4m33rA/Random-Password-Generator.git"
              demoLink="https://s4m33ra.github.io/Random-Password-Generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie-DB"
              description="This project was created as a way for me to showcase my skills as a Junior Web Developer. The project uses React to build a movie database application, styled with CSS, and utilizing the MovieDB API."
              ghLink="https://github.com/S4m33rA/Movie-DB
              demoLink="https://movie-db-eta-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Petri Local Restaurant"
              description="Made a simple website for a local drink restaurant near me."
              ghLink="https://github.com/S4m33rA/Petri.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
