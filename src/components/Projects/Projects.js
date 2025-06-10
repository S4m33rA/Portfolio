import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/restaurant.jpg";
import password from "../../Assets/Projects/password.jpg";
import movie from "../../Assets/Projects/movie.png";
import pokemondb from "../../Assets/Projects/pokemondb.jpeg";
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
              ghLink="https://github.com/S4m33rA/Movie-DB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/pokemondb.jpeg")}  // Update path based on your actual image
              isBlog={false}
              title="Pokémon Database Project"
              description="University Assignment which is a Microsoft Access database system designed to manage Pokémon data, including types, abilities, evolutions, and battles. Built with relational tables, forms, queries, reports, and navigation menu."
              ghLink="https://github.com/S4m33rA/PokemonDB.git" // optional: upload your .accdb or screenshots to GitHub
              demoLink="https://drive.google.com/file/d/18f4OD4xcqyF_bAXPOpW5Bq5mxUCh1AEj/view?usp=sharing"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;