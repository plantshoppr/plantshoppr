import React from "react";
import "./styles.css";
import { plantsdata } from "../plantdata";

const AllPlants = () => {
  return (
    <div className="plants-container">
      {plantsdata.map((data) => {
        return (
          <div className="plants">
            <img src={data.image} alt="img of plant" />
            <p>{data.name}</p>
            <p>{data.price}</p>
            <p>{data.likes}</p>
          </div>
        );
      })}
    </div>
  );
};

export { AllPlants };
