import React from "react";
import "./styles.css";
import { plantsdata } from "../plantdata";
import { Link } from "react-router-dom";

const AllPlants = () => {
  return (
    <div className="plants-container">
      {plantsdata.map((data) => {
        return (
          <div className="plants">
            <Link className="link-plant" to={`/plant/${data.id}`}>
              <img src={data.image} alt="img of plant" />
            </Link>
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
