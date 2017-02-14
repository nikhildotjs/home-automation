import React from 'react';
import _ from 'lodash';

export default class Lights extends React.Component {
  constructor (props) {
    super(props);
  }

  changeLights (lightName) {
    this.props.changeLights(lightName);
  }

  render () {
    const lights = _.map(this.props.lights, (light) => {
      const buttonText = light.Status ? 'On' : 'Off';
      const buttonClass = light.Status ? 'on' : 'off';
      return (
        <div className='light' key={light.Name}>
          <span className='light-label'>
            {light.Name + ' '}
          </span>
          <a href='javascript:void(0);' className={'light-button '+buttonClass} onClick={() => {this.changeLights(light.Name);}}>
            {buttonText}
          </a>
        </div>
      );
    });

    return (
      <div className='lights widget'>
        <div className='bold'>Lights</div>
        {lights}
      </div>
    );
  }
}

Lights.propTypes = {
  changeLights: React.PropTypes.func,
  lights: React.PropTypes.array
};
