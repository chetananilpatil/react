import React from "react";

function banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
           <div className="banner-img">
            <img src="lap2.jpg" alt="" />
          </div> 
          <div className="banner-content">
            <h6>Hello, I'm Chetan Patil</h6>
            <h3>Web Developer</h3>
            <p>
            Web Development. Visit & Lookup Immediate Results Now. Info Health Can Help You Find Relevant Information On What Your Are Looking For. Find Information Online.
            </p>
             <a className="btn" href="CHETAN's Resume (2).pdf">
              About Me
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default banner;