import React from 'react';

import './cta-button.scss';

export enum CtaType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type CTAButtonProps = {
  buttonText: string;
  type: CtaType.PRIMARY | CtaType.SECONDARY;
};

type CTAButtonState = {};

export class CTAButton extends React.Component<CTAButtonProps, CTAButtonState> {
  render(): React.ReactNode {
    return (
      <button
        className={`main-cta ${
          this.props.type === CtaType.PRIMARY
            ? 'main-cta--primary'
            : 'main-cta--secondary'
        }`}
      >
        <label className="description">{this.props.buttonText}</label>
      </button>
    );
  }
}
