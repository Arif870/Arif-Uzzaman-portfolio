import React, { Fragment } from "react";
import "./Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import img1 from "../../media/work1.png";
import img2 from "../../media/work2.png";
import img3 from "../../media/work3.png";
import img4 from "../../media/work4.png";

export default function Projects() {
  return (
    <Fragment>
      <section className="recent-work mt-100">
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontFamily: "lobster",
              fontSize: "50px",
            }}
          >
            Recent Projects
          </h1>

          {/* Project 1  */}
          <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://arif870.github.io/food-feed/">
                  <img className="w-100" src={img3} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
                Aqua Betta fish selling website by <span>React</span> I have
                used <span>MongoDB</span> for databse and <span>Firebase</span>{" "}
                for authentication. This wbesite is 100%{" "}
                <span>Mobile responsive</span> and cross browser supported.
                React bootstrap and materialUI used for make this website mobile
                responsive and beautiful outlook. <br />
                <br />
                This website has <span>two panle</span>. One for admin and
                another is normal user. Admin has all the access to accept
                product or delete. A normal user only register and buy fish.
                <span> Only one admin can make another admin by Gmail.</span>
                <br />
                <br />
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  href="https://aqua-react-firebase-mongodb.netlify.app/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/Arif870/Aqua"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
          </div>

          {/* Project 2      */}
          <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
                Doctor Appointment related website by <span>React</span>. It is
                very clean design. I have followed 2021 tranding design concept
                to make this doctor portal website clean. I have used{" "}
                <span> Material UI </span> for fornt-end design.
                <br />
                <br />
                <span>Firebase</span> for authentication and nosequel database{" "}
                <span>MongoDB</span> for database. Have a look to experience
                minimal design.
                <br />
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  href="https://doctor-portal-react.netlify.app/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/Arif870/doctor-portal"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://arif870.github.io/food-feed/">
                  <img className="w-100" src={img4} alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 3      */}
          <div className="row mt-4 align-items-center justify-content-between gy-5">
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a target="_black" href="https://arif870.github.io/food-feed/">
                  <img className="w-100" src={img1} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
                This is very clean and modern layout food website design. I have
                used only <span>HTML5</span> and <span>CSS3</span> to complete
                this landing page website design. Some illustration and design
                is made by me. <br />
                <br />
                I have used modern color concept in every section. CSS flex used
                to better alignment. This landing page design is only for
                desktop version. <br />
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  href="https://arif870.github.io/food-feed/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/Arif870/food-feed"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div
            className="
            row
            mt-5
            align-items-center
            justify-content-between
            gy-5
            col-sm-rev
          "
          >
            <div className="col-md-5 col-sm-12">
              <h2>About this project</h2>
              <p className="text-light mt-4">
                Full responsive modern layout website design by
                <span>HTML5</span>, <span>CSS3 </span> to make this website
                responsive and all device perfectly supported i have used,
                <span>CSS grid and flexbox</span> . This website concept from
                football website and my <span>UI design</span> experience.{" "}
                <br />
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  href="https://arif870.github.io/Responsive-football-website/"
                >
                  Full view <i className="fas fa-angle-double-right ms-2"></i>
                </a>{" "}
                <a
                  target="_blank"
                  cursor="pointer"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginLeft: "15px" }}
                  href="https://github.com/Arif870/Responsive-football-website"
                >
                  Github{" "}
                  <GitHubIcon
                    style={{
                      color: "white",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="image">
                <a
                  target="_black"
                  href="https://arif870.github.io/Responsive-football-website/"
                >
                  <img className="w-100 shadow" src={img2} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
