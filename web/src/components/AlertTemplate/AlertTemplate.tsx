import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import CloseIcon from './CloseIcon';
import ErrorIcon from './ErrorIcon';
import InfoIcon from './InfoIcon';
import SuccessIcon from './SuccessIcon';
import './AlertTemplate.scss';

export interface AlertTemplateProps {
  close?: () => any;
  message?: string;
  options?: any;
}

const AlertTemplate: FunctionComponent<AlertTemplateProps> = ({ close, message, options }) => {
  const classes = classNames(
    'alert',
    { 'alert-info': options.type === 'info' },
    { 'alert-success': options.type === 'success' },
    { 'alert-error': options.type === 'error' }
  );

  return (
    <div className={classes}>
      {options.type === 'info' && <InfoIcon />}
      {options.type === 'success' && <SuccessIcon />}
      {options.type === 'error' && <ErrorIcon />}
      <span>{message}</span>
      <button onClick={close}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default AlertTemplate;
