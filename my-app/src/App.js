import React from "react";
import "./App.css";
import { AllPlants } from "./Components/allplants/AllPlants";
import { Navbar } from "./Components/navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllPlants />
    </div>
  );
}

export default App;
