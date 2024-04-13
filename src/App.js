import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import ListPage from "./Pages/ListPage";
import Forums from "./Pages/Forums";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SIH" element={<Home />} />
        <Route path="/List" element={<ListPage />} />
        <Route path="/Forums" element={<Forums />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
