import * as React from 'react';
import classNames from 'classnames';
import './ContentBox.scss';

type ContentBoxProps = {
  className?: string;
};

const ContentBox: React.FunctionComponent<ContentBoxProps> = ({ children, className, ...rest }) => {
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
