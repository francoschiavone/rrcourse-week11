import React, { Component } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import appointments from './mocks/appointments.json';
import Appointments from './components/Appointments';
import AddAppointment from './components/AddAppointment';
import UpdateAppointment from './components/UpdateAppointment';
import './css/App.css';

class App extends Component {
  state = { appointments };

  deleteAppointment = (id) => {
    this.setState({ appointments: [...this.state.appointments.filter(appointment => appointment.id !== id)] });
  }

  updateForm = (updatedAppointment) => {
    this.setState({
      appointments: [...this.state.appointments.map(appointment => {
        if (parseInt(appointment.id) === parseInt(updatedAppointment.id)) {
          appointment = updatedAppointment;
        }
        return appointment;
      })]
    });
  }

  addAppointment = (appointment) => {
    appointment.id = this.state.appointments[this.state.appointments.length - 1].id + 1;
    this.setState({
      appointments: [...this.state.appointments, appointment]
    })
  }

  render() {
    return (
      <div>
        <div id='div1'>
          <Aside />
          <div id='div2'>
            <div id='div3'>
              <Header />
              <Appointments appointments={this.state.appointments} deleteAppointment={this.deleteAppointment} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '25px' }}>
          <AddAppointment addAppointment={this.addAppointment} />
          <UpdateAppointment updateForm={this.updateForm} />
        </div>
      </div>
    );
  }
}

export default App;

