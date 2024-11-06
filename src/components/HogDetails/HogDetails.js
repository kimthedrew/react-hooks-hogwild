import React from 'react';

const HogDetails = ({ hog }) => (
  <div className="ui segment">
    <h3>Details for {hog.name}</h3>
    <p>Speciality: {hog.speciality}</p>
    <p>weight: {hog.weight}</p>
    <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
    <p>Highest Medal: {hog.highestMedal}</p>
  </div>
);

export default HogDetails;
