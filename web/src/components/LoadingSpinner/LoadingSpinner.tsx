import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './LoadingSpinner.scss';

export interface LoadingSpinnerProps {
  className?: string;
  size?:
    | 'xs'
    | 'sm'
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({ className, size, ...rest }) => {
  return (
    <FontAwesomeIcon
      className={classNames('loading-spinner', className)}
      icon={['fas', 'spinner']}
      size={size}
      {...rest}
      spin
    />
  );
};

LoadingSpinner.defaultProps = {
  className: undefined,
  size: '4x'
};

export default LoadingSpinner;
