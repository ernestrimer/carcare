import React from "react";
import Vehicle from "./Vehicle";
import VehicleForm from "./VehicleForm";
import axios from "axios";

class Vehicles extends React.Component {
  state = {
    vehicles: [],
    toggleForm: false,
    schedule: [],
  };


  componentDidMount() {
    axios
      .get("/api/vehicles")
      .then((res) => {
        this.setState({ vehicles: res.data });
      })
      .catch(console.log("You have an error"));
  }f


  renderVehicles = () =>
    this.state.vehicles.map((vehicle) => <Vehicle {...vehicle} deleteVehicle={this.deleteVehicle}/>);

    toggle = () => {
      this.setState({ toggleForm: !this.state.toggleForm });
    };
  
  //! CRUD ACTIONS

  addVehicle = (newVehicle, serviceId) => {
    const { vehicles } = this.state;
    axios.post("/api/vehicles", newVehicle).then((res) => {
      this.setState({ vehicles: [res.data, ...vehicles] });
      this.addServiceVehicle(res.data.id, serviceId)
    });
  };

  addServiceVehicle = (vehicleId, serviceId) => {
      axios.post(`/api/vehicles/${vehicleId}/schedule`, {vehicle_id: vehicleId, service_id: serviceId}).then((res) => {
        console.log(res.data)
      });
  };


  deleteVehicle = (id) => {
    axios.delete(`/api/vehicles/${id}`)
      .then(res => {
      this.setState({ vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)})
    })
  }


  render() {
    // DECONSTRUCTION
    const { vehicles, toggleForm } = this.state;
    return (
      <div>
        <h1>List of Vehicles</h1>
        <div>
          {toggleForm ? (
            <VehicleForm add={this.addVehicle} toggleForm={this.toggle} />
          ) : (
            <div>No Form</div>
          )}
          <button onClick={() => this.toggle()}>Toggle Add Form</button>
        </div>
        {this.renderVehicles()}
      </div>
    );
  }
}

// FUNCTIONS

// JSX/HTML

export default Vehicles;