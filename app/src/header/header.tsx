import React from 'react';

import './header.scss';

export class Header extends React.Component {
  state = {
    soilMoisture: 0,
    waterLevel: 0,
    battery: 0,
    waterSpent: 0,
    isOnline: false,
  };

  render(): React.ReactNode {
    return (
      <div className="flex-center">
        <h1 className="title"> My Plant</h1>
      </div>
    );
  }
}
