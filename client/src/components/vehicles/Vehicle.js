import React from "react";
import { Link } from "react-router-dom";
import Vehicles from './Vehicles';

const Vehicle = ({ make, model, year, mileage, deleteVehicle, id}) => {
  return (
    <div>
      <ul>
        <li>
          {make}
          {model}
          {year}
          {mileage}
        </li>
        <Link to={`/vehicles/${id}`}>Vehicle Page</Link>
        <button onClick={() => deleteVehicle(id)}>Delete</button>
      </ul>
    </div>
  );
};

export default Vehicle;