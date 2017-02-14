import React from 'react';
import _ from 'lodash';

export default class Temperature extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.increaseTemperature = this.increaseTemperature.bind(this);
    this.decreaseTemperature = this.decreaseTemperature.bind(this);
  }

  increaseTemperature () {
    if (this.props.temperature > 89) {
      return;
    }

    const newTemperature = this.props.temperature + 1;
    this.props.changeTemperature(newTemperature);

    if (newTemperature > 89) {
      this.setState({
        disableHeating: true
      });
    }

    if (this.state.disableCooling && newTemperature > 60) {
      this.setState({
        disableCooling: false
      });
    }
  }

  decreaseTemperature () {
    if (this.props.temperature < 61) {
      return;
    }

    const newTemperature = this.props.temperature - 1;
    this.props.changeTemperature(newTemperature);

    if (newTemperature < 61) {
      this.setState({
        disableCooling: true
      });
    }

    if (this.state.disableHeating && newTemperature < 90) {
      this.setState({
        disableHeating: false
      });
    }
  }

  render () {
    const disableCooling = this.state.disableCooling ? 'disable' : '';
    const disableHeating = this.state.disableHeating ? 'disable' : '';

    return (
      <div className='temperature widget'>
        <span className='bold'>Room Temperature</span>
        <div className='content'>
          <div className='degrees'>
            {this.props.temperature}°
          </div>
          <div>
            <a href='javascript:void(0);' className={`temperature-button hot ${disableHeating}`} onClick={this.increaseTemperature}>▲</a>
            <a href='javascript:void(0);' className={`temperature-button cold ${disableCooling}`} onClick={this.decreaseTemperature}>▼</a>
          </div>
        </div>
      </div>
    );
  }
}

Temperature.propTypes = {
  temperature: React.PropTypes.number,
  changeTemperature: React.PropTypes.func
};
