import classNames from 'classnames';
import React, { Component } from 'react';

import './TextArea.scss';

export interface TextAreaProps {
  className?: string;
  maxLength?: number;
  onChange: (event: any) => void;
  placeholder: string;
  value: string;
}

export interface TextAreaState {
  value: string;
}

class TextArea extends Component<TextAreaProps, TextAreaState> {
  constructor(props: TextAreaProps) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  public render() {
    const { className, maxLength, placeholder } = this.props;

    return (
      <textarea
        aria-label={placeholder}
        className={classNames('text-area', className)}
        maxLength={maxLength}
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

export default TextArea;
