import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a className="nav-item nav-link" href="/register">
          ثبت نام
        </a>
        <a className="nav-item nav-link" href="/login">
          ورود
        </a>
      </div>
    </nav>
  );
}
