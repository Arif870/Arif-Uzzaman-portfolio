import React from "react";
import { makeStyles } from "@mui/styles";
import Menu from "../../Menu/Menu";
import Banner from "../../Banner/Banner";
import Service from "../../Services/Service";
import Skills from "../../Skills/Skills";
import Projects from "../../projects/Projects";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles({
  fonts: {
    fontFamily: "poppins",
    color: "white",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.fonts}>
        <Menu />
        <Banner />
        <Service />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
