import classNames from 'classnames';
import React, { Component } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  className?: string;
  onChange: (event: any) => void;
  placeholder: string;
  value: string;
}

export interface TextInputState {
  value: string;
}

class TextInput extends Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  public render() {
    const { className, placeholder } = this.props;

    return (
      <input
        aria-label={placeholder}
        className={classNames('text-input', className)}
        onChange={this.onChange}
        placeholder={placeholder}
        value={this.state.value}
      />
    );
  }

  private onChange = (event: any) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  };
}

export default TextInput;
