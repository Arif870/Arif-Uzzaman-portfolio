import { Container } from "@mui/material";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import * as React from "react";
import { makeStyles } from "@mui/styles";
import Banner from "./Components/Banner/Banner";
import Service from "./Components/Services/Service";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const useStyles = makeStyles({
  fonts: {
    fontFamily: "poppins",
    color: "white",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.fonts}>
        <Menu />
        <Banner />
        <Service />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
