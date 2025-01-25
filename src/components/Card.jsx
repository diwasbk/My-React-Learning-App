import React from 'react';
import './Custom.css'; // Importing custom CSS

function Card(title) {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1309/2020/10/01135234/GettyImages-1172427455.jpg"
        alt="Sunset"
      />
      <div className="card-content">
        <div className="card-title">The Coldest Sunset</div>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="card-tags">
        <span className="tag">#photography</span>
        <span className="tag">#travel</span>
        <span className="tag">#winter</span>
      </div>
    </div>
  );
}

export default Card;
