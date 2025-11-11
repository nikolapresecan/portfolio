import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="d-flex flex-column align-items-center justify-content-center text-center py-5">
            <div className="notfound-card fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100" className="mb-3">
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="60" fill="#2d8cff" fontFamily="monospace">
                        404
                    </text>
                    <circle cx="160" cy="70" r="6" fill="#4fa3ff" opacity="0.8" />
                    <circle cx="40" cy="30" r="4" fill="#4fa3ff" opacity="0.6" />
                </svg>

                <h2 className="h4 mb-2 text-light">Page Not Found</h2>
                <p className="text-secondary mb-4">The page you’re looking for doesn’t exist or has been moved.</p>

                <Link to="/" className="btn btn-primary">Go Back Home</Link>
            </div>
        </section>
    );
}

export default NotFound