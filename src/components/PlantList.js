import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePrice }) {
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onDeletePlant={onDeletePlant}
      onUpdatePrice={onUpdatePrice}
    />
  ));

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;


