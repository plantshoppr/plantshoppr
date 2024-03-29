import React from "react";
import "./styles.css";
import { plantsdata } from "../plantdata";
import { Link } from "react-router-dom";

const AllPlants = () => {
  return (
    <div>
      <div className="plants-container">
        {plantsdata.map((data) => {
          return (
            <div className="plants">
              <Link className="link-plant" to={`/plant/${data.id}`}>
                <img src={data.image} alt="img of plant" />
                <div className="nameandprice">
                  <p>{data.name}</p>
                  <p>{data.price}</p>
                </div>
                <p className="likes">Likes: {data.likes}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AllPlants };
