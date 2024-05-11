import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">
          About 
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/create" className="link link-hover">
          Create
        </Link>
      </nav>
      <nav>
        
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Mirzo Ulug'bek Khudoyberdiyev</p>
      </aside>
    </footer>
  );
}

export default Footer;
