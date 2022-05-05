import './plant.css'
export const Plant = () => {
  return (
    <div className='plant_page'>
    <div className="plant_page-container">
      <div className="plant_page-section-1">
          <h1> Plant name</h1>
          <div className='plant-img-div'>
        <img
          alt="Plant-name"
          className='plant-img'
          src="https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwaee182f3/images/products/flowers/01883_01_giantorange.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
          size='300'
        /></div>
        <div className='button-div'>
        <button> Like</button>
        <button>Add to Cart</button>
        </div>
         </div>
      <div className="plant_page-section-2">
        <p className="plan_card-annual-price" color="white">
          Text about Plant
        </p>
      </div>
      </div>
    </div>
  );
};
