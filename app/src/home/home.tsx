import React from 'react';

import {Host} from '../constants/host';
import {Path} from '../constants/path';

import './home.scss';

export class Home extends React.Component {
  state = {
    soilMoisture: 0,
    waterLevel: 0,
    battery: 0,
    waterSpent: 0,
    isOnline: false,
  };

  getDeviceInfo = async (): Promise<void> => {
    const url = `https://${Host.DEFAULT}${Path.DEVICE_INFO}`;

    const response = await fetch(url);
    const deviceInfo = await response.json();
    this.setState({...deviceInfo, isOnline: true});
  };

  componentDidMount(): void {
    this.getDeviceInfo();
  }

  activateWaterPump = async () => {
    const url = `https://${Host.DEFAULT}${Path.ACTIVATE_WATER_PUMP}`;

    const response = await fetch(url, {method: 'POST'});
    const data = await response.json();
    console.log('ActivateWaterPump');
  };

  enableWaterPump = () => {
    console.log('EnableWaterPump');
  };

  disableWaterPump = () => {
    console.log('DisableWaterPump');
  };

  reboot = () => {
    console.log('reboot');
  };

  sleep = () => {
    console.log('sleep');
  };

  render(): React.ReactNode {
    return (
      <div>
        <div>Soil Moisture: {this.state.soilMoisture}</div>
        <div>Water Level: {this.state.waterLevel}</div>
        <div>Battery: {this.state.battery}</div>
        <div>Total Water Spent: {this.state.waterSpent}</div>
        <div>Network Status: {this.state.isOnline}</div>
        <div className="mt-4">
          <button onClick={this.sleep}>Sleep</button>
        </div>
        <div>
          <button onClick={this.reboot}>Reboot</button>
        </div>
        <div>
          <button onClick={this.enableWaterPump}>Enable Water Pump</button>
        </div>
        <div>
          <button onClick={this.disableWaterPump}>Disable Water Pump</button>
        </div>
        <div>
          <button onClick={this.activateWaterPump}>Activate Water Pump</button>
        </div>
      </div>
    );
  }
}
