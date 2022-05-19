import React from "react";
import "./App.css";
import { AllPlants } from "./Components/allplants/AllPlants";
import { Navbar } from "./Components/navbar";
import { Homepage } from "./Components/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
