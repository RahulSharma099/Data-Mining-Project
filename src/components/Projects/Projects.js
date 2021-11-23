import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import yvette from "../../Assets/Projects/yvette.png";
import shikshak from "../../Assets/Projects/Shikshakpng.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import letsgtok from "../../Assets/Projects/letsgtok.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import keepnotes from "../../Assets/Projects/KeepNotes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Super-Color"
              description="Supercolor is an ML web-app which has been trained to rebuild color images from their grayscale or B/W input equivalents that you provide us with.
              It works on the concept of Autoencoders. These autoencoders cleverly store the important details of a big image into a small space and then try to recreate this image in color."
              link="https://github.com/Data-Science-Community-SRM/Super-Color"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Breast Cancer detection"
              description="Breast cancer is the most common invasive cancer in women and the second leading cause of cancer death in women after lung cancer. My deep learning model uses PyTorch and a pre-defined dataset having 569 samples and 30 features each, which helps the model train with an accuracy of 97.37%"
              link="https://github.com/DaemonOnCode/Breast-cancer-detection-using-PyTorch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shikshak}
              isBlog={false}
              title="Shikshak"
              description="Shikshak a low-bandwidth solution to attending online classes through our portal. The magic happens in how we transmit the image of the board on which the teacher is writing. We heavily compress it to the format such that there is almost an 85% decrease in internet consumption using our product."
              link="https://github.com/gitaalekhyapaul/shikshak"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keepnotes}
              isBlog={false}
              title="KeepNotes"
              description=" Keep is a note-taking service included as part of the free, web-based Google Docs Editors suite offered by Google. The service also includes Google Docs, Google Sheets, Google Slides, Google Drawings, Google Forms, and Google Sites.  "
              link="https://github.com/RahulSharma099/keepNotes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letsgtok}
              isBlog={false}
              title="Lets Gtok Clone"
              description="We recognize the importance of offering the most significant possible update experience to help people and organizations stay protected and productive, mainly as people rely on our platform more than ever to share and trade feelings."
              link="https://letsgtok-client.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yvette}
              isBlog={false}
              title="Yvette"
              description="Yvette is a slack bot which is a nifty way to run code and automate tasks. In Slack, a bot is controlled programmatically via a bot user token that can access one or more of Slack's APIs."
              link="https://github.com/srm-kzilla/yvette"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
