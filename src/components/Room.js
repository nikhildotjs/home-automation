import React from 'react';
import _ from 'lodash';
import Temperature from './Temperature';
import Curtains from './Curtains';
import Lights from './Lights'

export default class Room extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='room-container'>
        <Temperature temperature={this.props.roomData.Temperature} changeTemperature={this.props.changeTemperature}/>
        <Curtains curtains={this.props.roomData.Curtains} changeCurtains={this.props.changeCurtains}/>
        <Lights lights={this.props.roomData.Lights} changeLights={this.props.changeLights}/>
      </div>
    );
  }
}

Room.propTypes = {
  roomData: React.PropTypes.object,
  changeTemperature: React.PropTypes.func,
  changeCurtains: React.PropTypes.func,
  changeLights: React.PropTypes.func
};
