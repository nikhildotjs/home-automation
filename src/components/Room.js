import React from 'react';
import _ from 'lodash';
import Temperature from './Temperature';

export default class Room extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div className='room-container'>
        <Temperature temperature={this.props.roomData.Temperature} changeTemperature= {this.props.changeTemperature}/>
      </div>
    );
  }
}