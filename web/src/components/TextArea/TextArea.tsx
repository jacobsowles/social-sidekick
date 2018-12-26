import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './TextArea.scss';

export interface TextAreaProps {
  className?: string;
  maxLength?: number;
  onChange: (event: any) => void;
  placeholder: string;
  value: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  className,
  maxLength,
  onChange,
  placeholder,
  value
}) => {
  return (
    <textarea
      aria-label={placeholder}
      className={classNames('text-area', className)}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextArea;
