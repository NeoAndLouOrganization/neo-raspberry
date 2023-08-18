import React from 'react';

import {Host} from '../constants/host';
import {Path} from '../constants/path';

import {CTAButton, CtaType} from '../cta-button/cta-button';
import {InfoCard} from '../info-card/info-card';
import {Checkbox} from '../checkbox/checkbox';
import {Header} from '../header/header';

import './home.scss';
import {HeroPot} from '../hero-pot/hero-pot';

export class Home extends React.Component {
  state = {
    soilMoisture: 0,
    waterLevel: 0,
    battery: 0,
    waterSpent: 0,
    isOnline: false,
    enableAutomaticWatering: false,
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

  handleAutomaticWateringChange = (event: any) => {
    this.setState({enableAutomaticWatering: event.target.checked});
  };

  render(): React.ReactNode {
    return (
      <div className="main-container">
        <header className="App-header">
          <div>
            <Header />
          </div>
          <div className="content__header">
            <div className="content__header--left">
              <HeroPot icon="./static/potted-plant.png" />
            </div>
            <div className="content__header--right">
              <Checkbox
                description={'Automatic Watering'}
                value={this.state.enableAutomaticWatering}
                handleChange={this.handleAutomaticWateringChange}
              />
            </div>
          </div>
        </header>

        <div className="content__wrapper">
          <InfoCard
            icon="./static/humidity.png"
            description="Soil Moisture"
            value={this.state.soilMoisture}
          />
          <InfoCard
            icon="./static/sea-level.png"
            description="Water Level"
            value={this.state.waterLevel}
          />
          <InfoCard
            icon="./static/tap.png"
            description="Water Spent"
            value={this.state.waterSpent}
          />
        </div>
        <div className="cta-area__wrapper">
          <CTAButton buttonText={'Sleep'} type={CtaType.SECONDARY} />
          <CTAButton buttonText={'Water Now'} type={CtaType.PRIMARY} />
        </div>
      </div>
    );
  }
}
