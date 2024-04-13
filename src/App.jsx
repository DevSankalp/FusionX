import React from "react";
import "./App.css";
import "./index.css";
import Lenis from "@studio-freight/lenis";
import Home from "./Pages/Home";
import ListPage from "./Pages/ListPage";
import Forums from "./Pages/Forums";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Circle2 } from "react-preloaders";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SIH" element={<Home />} />
            <Route path="/List" element={<ListPage />} />
            <Route path="/Forums" element={<Forums />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </ParallaxProvider>
      <Circle2 time={1000} />
    </React.Fragment>
  );
}

export default App;
