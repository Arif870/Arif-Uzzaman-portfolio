import { Container } from "@mui/material";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
