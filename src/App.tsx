import React, { useEffect, useState } from "react";
import './style/App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import PersonalData from "./pages/PersonalData";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/id/:id" element={<PersonalData />} />
      </Routes>
    </div>
  );
}
export default App;
