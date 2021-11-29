import { Button } from "@mui/material";
import * as React from "react";
import logo from "../../media/logo.png";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <img style={{ width: "80px" }} src={logo} alt="logo" />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Button
        className="ms-auto"
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
    </nav>

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         <img style={{ width: "100px" }} src={logo} alt="" />
    //       </Typography>
    //       <Button style={{ fontFamily: "poppins" }} variant="contained">
    //         <a
    //           style={{ textDecoration: "none", color: "white" }}
    //           href="mailto: arifuzzaman959@gmail.com"
    //         >
    //           Hire me
    //         </a>
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}
