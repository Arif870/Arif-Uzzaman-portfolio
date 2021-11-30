import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Menu from "../../Shared/Menu/Menu";
import Banner from "../Home/Banner/Banner";
import p1 from "../../../media/projects/p1.png";
import p2 from "../../../media/projects/p2.png";
import p3 from "../../../media/projects/p3.png";
import p4 from "../../../media/projects/p4.png";
import p5 from "../../../media/projects/p5.png";
import p6 from "../../../media/projects/p6.png";
import p7 from "../../../media/projects/p7.png";
import p8 from "../../../media/projects/p8.png";
import p9 from "../../../media/projects/p9.png";
import p10 from "../../../media/projects/p10.png";
import p11 from "../../../media/projects/p11.png";
import p12 from "../../../media/projects/p12.png";
import p13 from "../../../media/projects/p13.png";
import p14 from "../../../media/projects/p14.png";
import p15 from "../../../media/projects/p15.png";
import p16 from "../../../media/projects/p16.png";
import "./Allprojects.css";
export default function AllProjects() {
  return (
    <div>
      <Menu />
      <Banner />
      <div classNameName="container">
        <h1
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "lobster",
            fontSize: "50px",
          }}
        >
          My Projects
        </h1>
        <div class="card-deck">
          <div className="row g-4 mt-5">
            {/* Project 1  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p1} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Portfolio website</h5>
                  <p className="card-text">
                    React | Bootstrap | Material UI | Mobile responsive | Email
                    JS | React router{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://arifuzzaman-portfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2  */}

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p2} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Aqua</h5>
                  <p className="card-text">
                    React | Express | MongoDB | Material UI | Firebase |
                    Javascript | NodeJS{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://aqua-react-firebase-mongodb.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p3} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Doctor Portal</h5>
                  <p className="card-text">
                    React | Express | MongoDB | Material UI | Firebase |
                    Javascript | NodeJS | Dashboard{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://doctor-portal-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 4  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p4} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Food delivary</h5>
                  <p className="card-text">
                    React | Express | MongoDB | Bootstrap | Javascript | NodeJS
                    | Router{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://arifs-food-delivery-react-express-mongodb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 5  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p5} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Fitness center</h5>
                  <p className="card-text">
                    React | Bootstrap | Responsive | Api | Firebase |
                    Authentication{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://fitness-center-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 6  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p6} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">car-mechanique</h5>
                  <p className="card-text">
                    React | Bootstrap | Responsive | Api | Authentication |
                    Firebase{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://car-mechanique-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 7  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p7} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Learn Programming</h5>
                  <p className="card-text">React | HTML5 | CSS3 | Responsive</p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://learn-programming-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 8  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p8} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Doctor Donation</h5>
                  <p className="card-text">
                    React | JavaScript | HTML5 | CSS3 | Responsive
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://donation-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 9  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p9} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Electro Shop</h5>
                  <p className="card-text">
                    React | JavaScript | HTML5 | CSS3 | Responsive
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://ecommerce-reactapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 10  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p10} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Quiz App</h5>
                  <p className="card-text">
                    JavaScript | HTML5 | CSS3 | Responsive | JSON API
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://quizz-app-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 11  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p11} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Book Search</h5>
                  <p className="card-text">
                    React | JavaScript | HTML5 | CSS3 | Responsive | API
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://book-archivejs.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 12  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p12} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Weather Search</h5>
                  <p className="card-text">
                    JavaScript | HTML5 | CSS3 | Responsive | API
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://weatherstatus-api-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 13  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p13} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Macbook-pro shop</h5>
                  <p className="card-text">
                    JavaScript | HTML5 | CSS3 | Responsive
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://macbook-pro-javascript.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 14  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p14} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Honda shop</h5>
                  <p className="card-text">
                    HTML5 | CSS3 | Responsive | web design | media query
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://cbrhonda-bootstrap.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 15  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p15} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Football web design</h5>
                  <p className="card-text">
                    HTML5 | CSS3 | Responsive | web design | media query |
                    Animation
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://arif870.github.io/Responsive-football-website/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* Project 16  */}

            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="card bg-dark shadow">
                <img className="card-img-top" src={p16} alt="project1" />
                <div className="card-body">
                  <h5 className="card-title text-info">Food Feed</h5>
                  <p className="card-text">
                    HTML5 | CSS3 | Responsive | web design | media query |
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://arif870.github.io/food-feed/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger btn-sm d-block w-100 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
