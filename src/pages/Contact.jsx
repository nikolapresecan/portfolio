import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "610b141a-05f1-48b6-acfb-e8aa109c395d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      const successMsg = "Your message has been sent successfully!";
      setResult(successMsg);
      form.reset();
      alert(successMsg);
    } else {
      const errorMsg = "Something went wrong. Please try again later.";
      setResult(errorMsg);
      alert(errorMsg);
    }
  };

  const EMAIL = "nikolapresecan11@gmail.com";
  const PHONE = "+385997439317";        
  const WHATSAPP_LINK = "https://wa.me/385997439317"; 
  const ADDRESS = "Pitomača, Croatia";

  return (
    <section className="py-5 fade-in">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
                <h1 className="display-6 fw-semibold mb-3 text-gradient">Contact</h1>
            </div>
          <div className="col-lg-5">
            <div className="card contact-card shadow-sm h-100">
              <div className="card-body p-3 p-md-4 d-flex flex-column justify-content-center">
                <p className="text-secondary mb-4">
                  Feel free to reach out about freelance, full-time or volunteer opportunities.
                </p>

                <ul className="list-unstyled mb-3">
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bi bi-envelope me-2"></i>
                    <a href={`mailto:${EMAIL}`} className="link-light text-decoration-none">
                      {EMAIL}
                    </a>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bi bi-telephone me-2"></i>
                    <span className="text-light">{PHONE}</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bi bi-whatsapp me-2"></i>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="link-light text-decoration-none">
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-geo-alt me-2"></i>
                    <span className="text-light">{ADDRESS}</span>
                  </li>
                </ul>

                <p className="text-secondary small mb-2">
                  I reply as soon as possible. Thanks for your time!
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="card contact-form-plain">
              <div className="card-body p-3 p-md-4">
                <form onSubmit={onSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control form-control-dark"
                      name="name"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control form-control-dark"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control form-control-dark"
                      name="message"
                      rows="6"
                      maxLength={1001}
                      placeholder="Write your message..."
                      required
                    />
                  </div>

                  <div className="d-grid d-sm-flex align-items-center gap-2 mt-3">
                    <button className="btn btn-primary" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact