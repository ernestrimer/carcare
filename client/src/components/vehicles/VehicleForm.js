import React from 'react';
import Vehicle from './Vehicles';
import axios from "axios";

class VehicleForm extends React.Component {
  state = { make: "", 
  model: "", 
  year: "", 
  mileage: "", 
  serviceChoice: null,
    services: [],
    editServiceId: ''
};

  componentDidMount() {
    if (this.props.vehicle) {
      const {  make, model, year, mileage, id } = this.props.vehicle;
      this.setState({ make: make, model: model, year: year, mileage: mileage });
    }
    // axios call to booze controller index method
    // to grab all boozes, set them to booze array 
    axios.get('/api/services')
    .then((res) => {
      this.setState({ services: res.data });
    })
    .catch(console.log("You have an Error"));

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    
    e.preventDefault();

    if (this.props.vehicle) {
      const { id } = this.props.vehicle;
      axios.get(`/api/vehciles/${id}/schedules`)
        .then(res => {
          const serviceVehicle = res.data[0]
          this.setState({editServiceId:serviceVehicle.id }) 
      })
      const { make, model, year, mileage, editServiceId} = this.state;
      this.props.editVehicle(id, {make: make, model: model, year: year, mileage: mileage }, editServiceId);
      this.props.toggleEdit();
    } else {
      const{ make, model, year, mileage, serviceChoice} =this.state 
      this.props.add({ make:make, model:model, year:year, mileage:mileage },serviceChoice);
      this.props.toggleForm();
    }
  };
// function that is going to list out all booze
  addServiceToVehicle = () => {
    return this.state.service.map( (service) => (
      <option value={service.id}>
        {service.name}
      </option>

    ))
  }

  render() {
    const { make, model, year, mileage, serviceChoice } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Make"
          name="make"
          value={make}
          onChange={this.handleChange}
        />
        <input
          placeholder="Model"
          name="model"
          value={model}
          onChange={this.handleChange}
        />
        <input
          placeholder="Year"
          name="year"
          value={year}
          onChange={this.handleChange}
        />  
        {/* lists out all of the booze names */}
        <input
          placeholder="Mileage"
          name="mileage"
          value={mileage}
          onChange={this.handleChange}
        />
        <select 
          placeholder="Vehicle"
          // be a radio list where you can selected more then one booze
          name="serviceChoice" 
          value={serviceChoice}
          onChange={this.handleChange}
          ><option> 
            services...
          </option>
          {this.addServiceToVehicle()} 
        </select>

        <button>Submit</button>
      </form>
    );
  }
}

export default VehicleForm;

