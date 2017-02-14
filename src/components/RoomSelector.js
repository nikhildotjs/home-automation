import React from 'react';
import _ from 'lodash';

export default class RoomSelector extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.props.changeRoom(event.target.value)
  }

  render () {
    const options = _.map(this.props.roomNames, (room) => {
      return (<option value={room} key={room}>{room}</option>);
    });

    return (
      <div className='room-select'>
        <select value={this.props.currentRoom} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}

RoomSelector.propTypes = {
  currentRoom: React.PropTypes.string,
  changeRoom: React.PropTypes.func
};
