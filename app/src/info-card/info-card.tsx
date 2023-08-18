import React from 'react';

import './info-card.scss';

type InfoCardProps = {
  description: string;
  icon: string;
  value: number;
};

type InfoCardState = {};

export class InfoCard extends React.Component<InfoCardProps, InfoCardState> {
  render(): React.ReactNode {
    return (
      <div className="info-card">
        <div className="info-card__left">
          <img src={this.props.icon} className="info-card__icon"></img>
        </div>
        <div className="info-card__right">
          <label className="info-card__description">
            {this.props.description} - {this.props.value}
          </label>
        </div>
      </div>
    );
  }
}
