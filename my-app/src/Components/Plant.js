import "./plant.css";
import { plantsdata } from "./plantdata";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Plant = () => {
  const params = useParams();

  const plant = plantsdata.find((plantObj) => {
    console.log(plantObj.id, params.id);
    return plantObj.id === parseInt(params.id);
  });

  const [countUp, setCountUp] = useState(plant.likes);

  return (
    <div className="plant_page">
      <div className="plant_page-container">
        <div className="plant_page-section-1">
          <h1> {plant.name}</h1>
          <div className="plant-img-div">
            <img
              alt={plant.name}
              className="plant-img"
              src={plant.image}
              size="300"
            />
          </div>
          <p>{countUp} likes</p>
          <div className="button-div">
            <button
              className="individual-plant-button"
              onClick={() => setCountUp(countUp + 1)}
            >
              Like
            </button>
            <button
              className="individual-plant-button"
              onClick={() => alert("Coming soon! (⊙ ﹏ ⊙)")}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="plant_page-section-2">
          <p className="plant_page-paragraph">{plant.description}</p>
        </div>
      </div>
    </div>
  );
};
