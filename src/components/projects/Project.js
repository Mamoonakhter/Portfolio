import React from "react";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Project = () => {
  return (
    <div id="project">
      <h4>Projects</h4>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/Z7l0JfqTeeK41_DGK7cRnkmagm_brdcAWCEmpXuGj_rUmOVr9vyuuoIaJtXngW1nZVg0bWjYlmGQPQsE11Og_nMH=w640-h400-e365-rj-sc0x00ffffff"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>ToDo list</h3>
            <p>in these project u can manage your task</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/3lPhraiNVcw/maxresdefault.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>News Application</h3>
            <p>For news news api is used in these project</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project;
