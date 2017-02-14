import React from 'react';
import _ from 'lodash';
import RoomSelector from './RoomSelector';
import Room from './Room';

export default class HomeAutoTool extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      rooms: this.props.roomData,
      currentRoomName: this.props.roomData[0].Name
    };

    // Bind this so that the function can be passed as a prop
    this.changeRoom = this.changeRoom.bind(this);
    this.changeTemperature = this.changeTemperature.bind(this);
    this.changeCurtains = this.changeCurtains.bind(this);
    this.changeLights = this.changeLights.bind(this);
  }

  changeRoom (roomName) {
    this.setState({
      currentRoomName: roomName
    });
  }

  changeTemperature (newTemperature) {
    const rooms = this.state.rooms;
    const currentRoom = rooms[_.findIndex(rooms, { Name: this.state.currentRoomName})];
    currentRoom.Temperature = newTemperature;
    this.setState({rooms});

    let ajaxData = {
      roomName: this.state.currentRoomName,
      temperature: newTemperature
    };

    $.ajax({
      method: 'PATCH',
      url: '/api/temperature',
      data: ajaxData,
      success: (body) => {
        console.log(body);
      },
      error: () => {
        console.log('Temperature Update Failed');
      }
    });
  }

  changeCurtains () {
    const rooms = this.state.rooms;
    const currentRoom = rooms[_.findIndex(rooms, { Name: this.state.currentRoomName})];
    currentRoom.Curtains = 1 - currentRoom.Curtains; // Flip between 0 and 1
    this.setState({rooms});

    const ajaxData = {
      roomName: this.state.currentRoomName,
      curtains: currentRoom.Curtains
    };

    $.ajax({
      method: 'PATCH',
      url: '/api/curtains',
      data: ajaxData,
      success: (body) => {
        console.log(body);
      },
      error: () => {
        console.log('Curtain Change Failed');
      }
    });
  }

  changeLights (lightName) {
    const rooms = this.state.rooms;
    const currentRoom = rooms[_.findIndex(rooms, { Name: this.state.currentRoomName })];
    const light = currentRoom.Lights[_.findIndex(currentRoom.Lights, { Name: lightName })];
    light.Status = 1 - light.Status; // Flip between 0 and 1
    this.setState({rooms});

    const ajaxData = {
      roomName: this.state.currentRoomName,
      lightName: light.Name,
      lightStatus: light.Status
    };

    $.ajax({
      method: 'PATCH',
      url: '/api/lights',
      data: ajaxData,
      success: (body) => {
        console.log(body);
      },
      error: () => {
        console.log('Curtain Change Failed');
      }
    });
  }

  render () {
    const currentRoomData = _.find(this.state.rooms, { Name: this.state.currentRoomName});
    const roomNames = _.map(this.state.rooms, 'Name');

    return (
      <div className='main-content'>
        <RoomSelector currentRoom={this.state.currentRoomName} changeRoom={this.changeRoom} roomNames={roomNames}/>
        <Room roomData={currentRoomData} changeTemperature={this.changeTemperature}
          changeCurtains={this.changeCurtains} changeLights={this.changeLights}/>
      </div>
    );
  }
}

HomeAutoTool.propTypes = {
  roomData: React.PropTypes.object
};
