import React, { Component } from 'react';
import '../css/AppoinmentItem.css';

export class AppoinmentItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.appointment.id}</td>
                <td>{this.props.appointment.buildingId}</td>
                <td>{this.props.appointment.boilerId}</td>
                <td>{this.props.appointment.startTimestamp}</td>
                <td>{this.props.appointment.endTimestamp}</td>
                <td>{this.props.appointment.maintenanceType}</td>
                <td>
                    <button onClick={this.props.deleteAppointment.bind(this, this.props.appointment.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default AppoinmentItem
