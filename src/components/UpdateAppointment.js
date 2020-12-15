import React , { Component } from 'react';
import '../css/UpdateAppointment.css';

class UpdateForm extends Component {

    state = {
        id: '',
        buildingId: '',
        boilerId: '',
        startTimestamp: '',
        endTimestamp: '',
        maintenanceType: '',
    }

    changeValue = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    submition = (e) => {
        e.preventDefault();
        const updatedAppointment = {
            id: this.state.id,
            buildingId: this.state.buildingId,
            boilerId: this.state.boilerId,
            startTimestamp: this.state.startTimestamp,
            endTimestamp: this.state.endTimestamp,
            maintenanceType: this.state.maintenanceType
        }
        this.props.updateForm(updatedAppointment);
        this.setState( {
            id: '',
            buildingId: '',
            boilerId: '',
            startTimestamp: '',
            endTimestamp: '',
            maintenanceType: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.submition}>
                <div id = 'updateDiv'>
                    <h3 id = 'updateTitle'>
                        Update Appointment: 
                    </h3>
                    <ul>
                        <li>
                            <label htmlFor="id">Id:</label>
                            <input type="number" id="id" placeholder="....." value={this.state.id} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="buildingId">Building ID:</label>
                            <input type="number" id="buildingId" placeholder="....." value={this.state.buildingId} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="boilerId">Boiler ID:</label>
                            <input type="number" id="boilerId" placeholder="....." value={this.state.boilerId} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="startTimestamp">Starting Date:</label>
                            <input type="date" id="startTimestamp" placeholder="....." value={this.state.startTimestamp} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="endTimestamp">Ending Date:</label>
                            <input type="date" id="endTimestamp" placeholder="....." value={this.state.endTimestamp} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="maintenanceType">Maintenance Type:</label>
                            <input type="text" id="maintenanceType" placeholder="....." value={this.state.maintenanceType} onChange={this.changeValue} required />
                        </li>
                    </ul>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}

export default UpdateForm;