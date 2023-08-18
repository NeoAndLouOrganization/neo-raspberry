import React from 'react';

import './checkbox.scss';

type CheckboxProps = {
  description: string;
  value: boolean;
  handleChange: (event: any) => void;
};

type CheckboxState = {
  value: boolean;
};

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  componentDidMount(): void {
    this.setState({value: this.props.value});
  }

  render(): React.ReactNode {
    return (
      <div className="checkbox-wrapper">
        <label className="checkbox-text">{this.props.description}</label>
        <input
          className="apple-switch"
          type="checkbox"
          checked={this.props.value || false}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
