import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem';
import propTypes from 'prop-types';
import '../css/Appointments.css';

class Appointments extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Building ID</th>
              <th>Boiler ID</th>
              <th>Starting Date</th>
              <th>Ending Date</th>
              <th>Maintenance Type</th>
              <th>Delete</th>
            </tr>
            {this.props.appointments.map(appointment => <AppointmentItem key={appointment.id} appointment={appointment} deleteAppointment={this.props.deleteAppointment} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

Appointments.propTypes = {
  appointments: propTypes.array.isRequired
}

export default Appointments;