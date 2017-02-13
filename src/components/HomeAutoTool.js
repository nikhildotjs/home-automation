import React from 'react';
import _ from 'lodash';
import RoomSelector from './RoomSelector';
import Room from './Room';

export default class HomeAutoTool extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      rooms: this.props.roomData,
      currentRoom: this.props.roomData[0].Name
    };

    // Bind this so that the function can be passed as a prop
    this.changeRoom = this.changeRoom.bind(this);
    this.changeTemperature = this.changeTemperature.bind(this);
  }

  changeRoom (roomName) {
    this.setState({
      currentRoom: roomName
    });
  }

  changeTemperature (newTemperature) {
    let rooms = this.state.rooms;
    const roomIndex = _.findIndex(rooms, { Name: this.state.currentRoom});
    rooms[roomIndex].Temperature = newTemperature;
    this.setState({rooms});

    let ajaxData = {
      roomName: this.state.currentRoom,
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

  render () {
    const currentRoomData = _.find(this.state.rooms, { Name: this.state.currentRoom});
    const roomNames = _.map(this.state.rooms, 'Name');

    return (
      <div className='main-content'>
        <RoomSelector currentRoom={this.state.currentRoom} changeRoom={this.changeRoom} roomNames={roomNames}/>
        <Room roomData={currentRoomData} changeTemperature={this.changeTemperature}/>
      </div>
    );
  }
}