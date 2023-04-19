import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePrice }) {
  const [inStock, setInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(plant.price);

  function toggleStock() {
    setInStock(!inStock);
  }

  function handlePriceChange(event) {
    setNewPrice(event.target.value);
  }

  function handlePriceSubmit(event) {
    event.preventDefault();
    onUpdatePrice(plant.id, parseFloat(newPrice));
  }

  function handleDelete() {
    onDeletePlant(plant.id);
  }

  return (
    <li className="card">
      <button onClick={handleDelete}>X</button>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <form onSubmit={handlePriceSubmit}>
        <p>
          Price:{" "}
          <input
            type="number"
            step="0.01"
            value={newPrice}
            onChange={handlePriceChange}
          />
        </p>
        <button type="submit">Update Price</button>
      </form>
      {inStock ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;



