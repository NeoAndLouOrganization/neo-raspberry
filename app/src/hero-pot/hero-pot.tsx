import React from 'react';

import './hero-pot.scss';

type HeroPotProps = {
  icon: string;
};

type HeroPotState = {};

export class HeroPot extends React.Component<HeroPotProps, HeroPotState> {
  render(): React.ReactNode {
    return <img src={this.props.icon} className="hero-pot__icon"></img>;
  }
}
