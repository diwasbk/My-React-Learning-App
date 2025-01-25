import React from 'react';
import './Custom.css'; // Importing custom CSS

function Card({title, desc, hashtag1, hashtag2, hashtag3}) {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1309/2020/10/01135234/GettyImages-1172427455.jpg"
        alt="Sunset"
      />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <p className="card-text">
          {desc}
        </p>
      </div>
      <div className="card-tags">
        <span className="tag">{hashtag1}</span>
        <span className="tag">{hashtag2}</span>
        <span className="tag">{hashtag3}</span>
      </div>
    </div>
  );
}

export default Card;
