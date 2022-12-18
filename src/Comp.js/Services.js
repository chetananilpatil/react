import React, { useState } from "react";

function ServicesExperience() {
    const [services] = useState([
    
  
     {
       icon: "fa-paintbrush",
       title: "UI Design",
       desc: "the process designers use to build interfaces in software or computerized devices, focusing on looks or style..",
    
     },
     {
       icon: "fa-pen-to-square",
       title: "Product Design",
       desc: "Product design as a verb is to create a new product to be sold by a business to its customers",
      
     },
     {
       icon: "fa-ruler",
       title: "Branding",
       desc: "the process of crafting a brand's visual identity by creating a unified system of design elements like logos, colors.",
      
     },
   ]);
  
  return (
    
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              {/* <button className="btn">Know More</button> */}
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>Freshar</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>11+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>Freshar</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>2+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>1</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default ServicesExperience;