import React from "react";
import Menu from "../../../Shared/Menu/Menu";
import aboutimg from "../../../../media/aboutme.png";
import Footer from "../../../Shared/Footer/Footer";
import LabTabs from "../LabTabs/LabTabs";

export default function Aboutme() {
  return (
    <div className="container">
      <Menu />
      <img className="w-75 mx-auto d-block" src={aboutimg} alt="" />
      <p className="text-center mt-4">
        <span className="text-info fw-bold fs-4">
          I am Arif-uz-zaman. Full stack web developer ( MERN )
        </span>{" "}
        <br />
        <br />
        <br /> I have completed my Graduation from Daffodil international
        university <br />
        Department of Computer Science and Engineering .
      </p>
      <LabTabs />
      <Footer />
    </div>
  );
}
