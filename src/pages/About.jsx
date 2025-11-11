import React from "react";
import sections from "../data/techSections.json";

function About() {
  return (
    <section className="py-5 fade-in">
      <div className="container">
        <div className="row g-4 align-items-start">
            <div className="col-12">
                <h1 className="display-6 fw-semibold mb-3 text-gradient">About Me</h1>
            </div>
            <div className="col-lg-6 about-left">
                <div className="card bg-transparent border-0">
                    <div className="card-body">
                        <h2 className="h4 mb-4 text-gradient">Who I Am</h2>

                        <p className="text-secondary">
                            My name is <strong>Nikola Presečan</strong>, I was born in <strong>2002</strong> and I’m from <strong>Croatia</strong>.  
                            I’m a detail-oriented person who enjoys working with technology and finding practical ways to solve problems through software development.  
                            I value clarity, structure and quality in everything I build.
                        </p>
                        
                        <p className="text-secondary">
                            I was born with <strong>arthrogryposis</strong>, a physical condition that doesn’t limit my work or focus in any way.  
                            It strengthened my patience, adaptability and attention to detail, values I apply in development.
                        </p>

                        <p className="text-secondary">
                            I hold a <strong>Bachelor’s degree in Computer Engineering</strong> from 
                            <a href="https://en.vuv.hr/" target="_blank" rel="noreferrer" className="link-light text-decoration-none">
                                {" "}Virovitica University of Applied Sciences
                            </a>, where I focused on programming, databases and software design.  
                            During my studies, I developed several individual and team projects that helped me connect logic, design and usability.
                        </p>

                        <p className="text-secondary">
                            In February 2025, I completed a <strong>backend internship</strong> at <strong>Factory d.o.o.</strong>,  
                            where I worked with <strong>PHP/Symfony</strong>, <strong>REST APIs</strong>, <strong>JWT authentication</strong> and <strong>MySQL</strong>, using <strong>Git</strong> and <strong>GitHub</strong> for version control and collaboration.
                        </p>

                        <p className="text-secondary">
                            I am willing to continue <strong>learning and developing technical skills</strong>, <strong>researching new technologies</strong>, 
                            and contributing to meaningful software projects that combine precision, creativity, and real-world impact.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-6 about-right">
                <div className="card bg-transparent border-0">
                    <div className="card-body">
                    <h2 className="h4 mb-4 text-gradient">Technologies I Work With</h2>
                    {sections.map((sec) => (
                        <div key={sec.title} className="mb-4">
                        <h3 className="h5 mb-3">{sec.title}</h3>
                        <div className="tech-grid">
                            {sec.items.map((t) => (
                            <div key={t.name} className="tech-item text-center">
                                <img src={t.icon} alt={t.name} />
                                <span>{t.name}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
