import React from "react";
import "./styles.css";
import { plantsdata } from "../plantdata";
import { Navbar } from "../navbar";

const AllPlants = () => {
  return (
    <div>
      <Navbar />

      <div className="plants-container">
        {plantsdata.map((data) => {
          return (
            <div className="plants">
              <img src={data.image} alt="img of plant" />
              <div className="nameandprice">
                <p>{data.name}</p>
                <p>{data.price}</p>
              </div>
              <p>Likes: {data.likes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AllPlants };
