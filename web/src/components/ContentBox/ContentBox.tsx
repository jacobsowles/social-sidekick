import * as React from 'react';
import classNames from 'classnames';
import IContentBox from './IContentBox';
import './ContentBox.scss';

const ContentBox: React.FunctionComponent<IContentBox> = ({ children, className, ...rest }) => {
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
