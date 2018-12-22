import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  className?: string;
  placeholder: string;
  value: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({ className, placeholder, value }) => {
  return (
    <input
      aria-label={placeholder}
      className={classNames('text-input', className)}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextInput;
