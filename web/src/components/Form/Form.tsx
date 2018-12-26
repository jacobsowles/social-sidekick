import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './Form.scss';

//// FIELD ////

interface FieldProps {
  className?: string;
}

const Field: FunctionComponent<FieldProps> = ({ children, className }) => {
  return <div className={classNames('form-field', className)}>{children}</div>;
};

Field.displayName = 'Form.Field';

//// WRAPPER ////

interface WrapperProps {
  className?: string;
  onSubmit?: (event: any) => void;
}

const Wrapper: FunctionComponent<WrapperProps> = ({ children, className, onSubmit }) => {
  return (
    <form className={classNames('form', className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Wrapper.displayName = 'Form.Wrapper';

export default { Field, Wrapper };
