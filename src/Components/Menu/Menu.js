import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../media/logo.png";
import "./Menu.css";

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{ width: "100px" }} src={logo} alt="" />
          </Typography>
          <Button style={{ fontFamily: "poppins" }} variant="contained">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="mailto: arifuzzaman959@gmail.com"
            >
              Hire me
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
