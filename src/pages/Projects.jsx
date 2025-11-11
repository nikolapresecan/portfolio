import React, { useMemo, useState } from "react";
import projects from "../data/projects.json";

const categories = ["All", "Full-stack", "Web", "Mobile", "Desktop"];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(p => p.category === active);
  }, [active]);

  return (
    <section className="py-5 fade-in">
      <div className="container">
        <h1 className="display-6 fw-semibold mb-3 text-gradient">Projects</h1>

        <br />

        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`btn btn-sm ${active === cat ? "btn-primary" : "btn-outline-secondary"}`}>
              {cat}
            </button>
          ))}
        </div>

        <br />
        
        <div className="row g-3 g-md-4">
          {filtered.map(p => (
            <div key={p.slug} className="col-12 col-md-6">
              <div className="card project-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-start justify-content-between mb-2">
                    <h3 className="h5 mb-0">{p.title}</h3>
                    <span className="badge rounded-pill text-bg-dark border border-opacity-25">
                      {p.category}
                    </span>
                  </div>

                  <p className="text-secondary mb-3">{p.description}</p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.stack.map(s => (
                      <span key={s} className="badge rounded-pill text-bg-secondary">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <a className="btn btn-sm btn-outline-secondary" href={p.repo} target="_blank" rel="noreferrer" title="View source on GitHub">
                      <i className="bi bi-github me-1"></i> Source
                    </a>
                  </div>
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
