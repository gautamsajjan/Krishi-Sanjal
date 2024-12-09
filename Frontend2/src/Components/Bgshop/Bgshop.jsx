import React from "react";
import "./Bgshop.css";

const Bgshop = () => {

  return (
    <div className="container">
      <div className="content">
        <div className="text-section">
          <p>
            Welcome to <strong>Krishi Sanjal</strong>, the largest online hub
            where local farmers connect directly with customers, delivering
            fresh, organic, and sustainable products straight from the fields.
            Experience the joy of knowing your food's source while supporting
            local farmers and embracing health with every bite.
          </p>
        </div>
        <div className="action-section">
          <header className="header">
            <h1>Farm Fresh to Your Table</h1>
            <p>Bridging Farmers and Consumers with Nature's Best Harvests</p>
          </header>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Products"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgshop;
