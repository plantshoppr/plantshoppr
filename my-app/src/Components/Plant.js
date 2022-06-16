import "./plant.css";
import { plantsdata } from "./plantdata";
import { useParams } from "react-router-dom";

export const Plant = () => {
  const params = useParams();

  const plant = plantsdata.find((plantObj) => {
    console.log(plantObj.id, params.id);
    return plantObj.id === parseInt(params.id);
  });

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
          <p>{plant.likes} likes</p>
          <div className="button-div">
            <button> Like</button>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="plant_page-section-2">
          <p className="plant_page-paragraph">{plant.description}</p>
        </div>
      </div>
    </div>
  );
};
