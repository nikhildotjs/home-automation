import React from 'react';
import _ from 'lodash';

export default class Curtains extends React.Component {
  constructor (props) {
    super(props);
    this.changeCurtains = this.changeCurtains.bind(this);
  }

  changeCurtains () {
    this.props.changeCurtains();
  }

  render () {
    const curtainStatus = this.props.curtains ? 'Open' : 'Closed';
    const colorClass = this.props.curtains ? 'open' : 'closed'

    return (
      <div className='curtains widget'>
        <span className='bold'>Curtains</span>
        <a href='javascript:void(0)' className={'curtain-button '+colorClass} onClick={this.changeCurtains}>{curtainStatus}</a>
      </div>
    );
  }
}

Curtains.propTypes = {
  curtains: React.PropTypes.number,
  changeCurtains: React.PropTypes.func
};
