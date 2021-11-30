import React, { Fragment } from "react";
import img1 from "../..//../../media/web-design.png";
import img2 from "../../../../media/graphic-design.png";
import img3 from "../../../../media/web-development.png";
import "./Service.css";

const services = [
  {
    name: "Front-end development",
    img: img1,
    color: "rgb(216, 196, 19)",
  },
  {
    name: "Graphic and UI design",
    img: img2,
    color: "tomato",
  },
  {
    name: "Full-stack  development",
    img: img3,
    color: "rgb(228, 27, 228)",
  },
];

export default function Service() {
  return (
    <Fragment>
      <section className="container m-100">
        <div className="services">
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontFamily: "lobster",
              fontSize: "50px",
            }}
          >
            Core Services
          </h1>
          <div className="row mt-5 gy-5">
            {services.map(service => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card bg-transparent">
                  <img
                    className="card-img-top w-50 mx-auto"
                    src={service.img}
                    alt="serviceimg"
                  />

                  <h4 style={{ color: service.color, marginTop: "20px" }}>
                    {service.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
