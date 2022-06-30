import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="content">
          <h4>Welcome to plantShopper!</h4>
          <p>We have colorful and edible plants picked right just for you.</p>
          <a href="/all-plants">
            <button>Shop All Plants</button>
          </a>
        </div>
      </div>
    </div>
  );
};
