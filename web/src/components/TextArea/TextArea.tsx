import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './TextArea.scss';

export interface TextAreaProps {
  className?: string;
  maxLength?: number;
  placeholder: string;
  value: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  className,
  maxLength,
  placeholder,
  value
}) => {
  return (
    <textarea
      aria-label={placeholder}
      className={classNames('text-area', className)}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextArea;
