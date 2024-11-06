import React, { useState } from 'react';


const HogForm = ({ onAddHog }) => {
  const [formData, setFormData] = useState({ name: '', image: '', speciality: '', weight: '', greased: false, highestMedal: ''});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({ name: '', image: '', speciality: '', weight: '', greased: false, highestMedal: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="write your name" required />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image" required />
      <input name="speciality" value={formData.speciality} onChange={handleChange} placeholder='specialty' required />
      <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
      <label>
        Greased:
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="highestMedal" value={formData.highestMedal} onChange={handleChange} placeholder="Highest Medal" />
      <button type="submit">Add Hog</button>
    </form>
  );
};


export default HogForm;
