import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  className?: string;
  onChange: (event: any) => void;
  placeholder: string;
  value: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  className,
  onChange,
  placeholder,
  value
}) => {
  return (
    <input
      aria-label={placeholder}
      className={classNames('text-input', className)}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextInput;
