import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './TextArea.scss';

export interface TextAreaProps {
  className?: string;
  maxLength?: number;
  placeholder: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({ className, maxLength, placeholder }) => {
  return (
    <textarea
      aria-label={placeholder}
      className={classNames('text-area', className)}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
