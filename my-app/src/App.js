import React from "react";
import "./App.css";
import { AllPlants } from "./Components/allplants/AllPlants";
import { Plant } from "./Components/Plant";
import { Navbar } from "./Components/navbar";
import { Homepage } from "./Components/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/all-plants" element={<AllPlants />} />

          <Route path="/plant/:id" element={<Plant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
