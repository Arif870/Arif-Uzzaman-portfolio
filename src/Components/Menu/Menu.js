import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.png";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img style={{ width: "70px" }} src={logo} alt="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
          </ul>
          <Button
            classNameName="ms-auto"
            style={{ fontFamily: "poppins" }}
            variant="contained"
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="mailto: arifuzzaman959@gmail.com"
            >
              Hire me
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
