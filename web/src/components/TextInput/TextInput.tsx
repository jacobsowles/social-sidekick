import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  className?: string;
  placeholder: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({ className, placeholder }) => {
  return (
    <input
      aria-label={placeholder}
      className={classNames('text-input', className)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
