import React from 'react';

export class Home extends React.Component {
  state = {
    soilMoisture: 0,
  };

  getSoilMoisture = () => {
    fetch('https://viktor.clients.dev.peacocktv.com/')
      .then(response => response.json())
      .then(json => console.log(json));
  };

  componentDidMount(): void {
    this.getSoilMoisture();
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>Hello World</div>
        <div>Soil Moisture is: {this.state.soilMoisture}</div>
      </div>
    );
  }
}
