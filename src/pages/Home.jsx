import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const highlights = [
    {
      title: "Continuous Learning",
      text: "Always exploring and improving through real projects.",
      icon: "bi bi-journal-code",
    },
    {
      title: "Team Spirit",
      text: "Believing that great software comes from collaboration.",
      icon: "bi bi-people",
    },
    {
      title: "Problem Solver",
      text: "Enjoy turning challenges into clean, working solutions.",
      icon: "bi bi-lightbulb",
    },
  ];

  return (
    <section className="py-5 fade-in">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-center text-md-start">
            <h1 className="display-6 fw-semibold mb-3">
              Hi, I'm <span className="text-primary">Nikola</span> —{" "}
              <span className="text-gradient">Junior Full-Stack Developer</span>
            </h1>

            <p className="text-secondary mb-3">
              Passionate about building modern, meaningful software.  
              I love learning new technologies and solving problems through clean code.
            </p>
          </div>
          
          <div className="col-lg-5 text-center">
            <div className="profile-photo-wrapper">
              <div className="profile-photo"></div>
            </div>
          </div>
        </div>

        <br /> 
        
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
          {highlights.map((h) => (
            <div className="col" key={h.title}>
              <div className="card h-100 shadow-sm card-hover text-center bg-transparent border border-opacity-10">
                <div className="card-body">
                  <i className={`${h.icon} text-primary fs-2 mb-3`}></i>
                  <h3 className="h5 mb-2">{h.title}</h3>
                  <p className="text-secondary small mb-0">{h.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <br />
        
        <div className="card cta-gradient mt-5 border-0">
          <div className="card-body d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <div className="flex-grow-1 text-center text-md-start">
              <h3 className="h5 mb-2">Looking for a motivated junior developer?</h3>
              <p className="text-secondary small mb-0">
                Open to <strong>freelance</strong>, <strong>full-time</strong> or even <strong> volunteer opportunities</strong> to gain more experience, learn from others and contribute to meaningful projects.
              </p>
            </div>
            
            <div className="cta-buttons mt-3 mt-md-0">
              <Link to="/contact" className="btn btn-primary">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
