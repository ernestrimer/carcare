import React from 'react';
import axios from 'axios';
import VehicleForm from './VehicleForm';


class VehicleView extends React.Component {
  state = { 
   vehcile: {},
   toggleEdit: false,
   services: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/vehicles/${id}`).then((res) => {
      this.setState({ vehicle: res.data });
    });
  }

  editVehicle = (id, vehicle) => {
    axios.put(`/api/vehicles/${id}`, vehicle)
      .then(res => {
      this.setState({vehicle: res.data})
      this.updateServiceVehicle(id, vehicle.serviceChoice)
      })
  };

  updateServiceVehicle = (vehicle_id, service_id) => {
    debugger
    axios.put(`/api/vehicles/`)
  }

  // 

  updateVehicle = (id) => {
  axios.put(`/api/vehicles/${id}`)
    .then( res => { 
      const vehicles = this.state.vehicles.map( t => {
        if(t.id === id)
          return res.data;
        return t;
      });
      this.setState({ vehicles, });
    })
  }

  toggle = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  // deleteDrink = (id) => {
  //   axios.delete(`/api/drinks/${id}`)
  //     .then(res => {
  //     this.setState({ drink: this.state.drink.filter(drink => drink.id !== id)})
  //   })
  //   return <Redirect to = {{ pathname: "/drinks" }} />;
    
  // }

  render() {
    const { make, model, year, mileage} = this.state.vehicle;
    return (
      <div>
        <h1>{make}</h1>
        <h1>{model}</h1>
        <h1>{year}</h1>
        <h1>{mileage}</h1>
        
        {this.state.toggleEdit ? <VehicleForm vehicle={this.state.vehicle} editVehicle={this.editVehicle} toggleEdit={this.toggle}/> : null}
        <button onClick={ () => this.toggle()}>
          {this.state.toggleEdit ? "Close Form" : "Edit"}
        </button>
        {/* <button onClick={() => this.state.deleteDrink}>Delete</button> */}
        
      </div>
    );
  }

}

export default VehicleView;

