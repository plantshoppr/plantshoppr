import React from "react";
import "./App.css";
import { AllPlants } from "./Components/allplants/AllPlants";
import { Plant } from "./Components/Plant";
import { Navbar } from "./Components/navbar";
import { Homepage } from "./Components/homepage";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";
import { Footer } from "./Components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/all-plants" element={<AllPlants />} />

          <Route path="/plant/:id" element={<Plant />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
