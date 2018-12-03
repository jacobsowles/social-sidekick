import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './ContentBox.scss';

export interface ContentBoxProps {
  className?: string;
}

const ContentBox: FunctionComponent<ContentBoxProps> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('content-box', className)} {...rest}>
      {children}
    </div>
  );
};

ContentBox.defaultProps = {
  className: undefined
};

export default ContentBox;
