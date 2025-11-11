import React from "react";

function Footer() {
  return (
    <footer className="py-3 mt-auto">
      <div className="container text-secondary text-center small">
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer