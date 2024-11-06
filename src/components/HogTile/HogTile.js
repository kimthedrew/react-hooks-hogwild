import React from 'react';

const HogTile = ({ hog, onClick, onHide }) => (
  <div className="ui eight wide column">
    <div className="ui card" onClick={onClick}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div>
        <h2>{hog.name}</h2>
      </div>
      <div className="extra content">
        <button onClick={onHide}>Hide</button>
      </div>
    </div>
  </div>
);

export default HogTile;
