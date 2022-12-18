import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "back1.jpg",
      gLink: "https://guileless-entremet-7db509.netlify.app",
      
    },
    {
      title: "Project 2",
      img: "w4.jpg",
      gLink: "https://chetananilpatil.github.io/chetanboostrap/",
     
    },
    
    
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
            
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;