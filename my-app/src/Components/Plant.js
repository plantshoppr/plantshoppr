import './plant.css'
import { plantsdata } from './plantdata';


export const Plant = () => {
    let plant1 = plantsdata[0];

  return (
    <div className='plant_page'>
    <div className="plant_page-container">
      <div className="plant_page-section-1">
          <h1> {plant1.name}</h1>
          <div className='plant-img-div'>
        <img
          alt={plant1.name}
          className='plant-img'
          src={plant1.image}
          size='300'
        /></div>
        <p>{plant1.likes} likes</p>
        <div className='button-div'>
        <button> Like</button>
        <button>Add to Cart</button>
        </div>
         </div>
      <div className="plant_page-section-2">
        <p className="plant_page-paragraph">
         {plant1.description}
        </p>

      </div>
      </div>
    </div>
  );
};
