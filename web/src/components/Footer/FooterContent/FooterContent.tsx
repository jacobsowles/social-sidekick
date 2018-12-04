import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './FooterContent.scss';

export interface FooterContentProps {
  className?: string;
  pullRight?: boolean;
}

const FooterContent: FunctionComponent<FooterContentProps> = ({
  children,
  className,
  pullRight
}) => {
  const classes = classNames('footer-content', pullRight ? 'float-right' : 'float-left', className);
  return <p className={classes}>{children}</p>;
};

FooterContent.defaultProps = {
  className: undefined,
  pullRight: false
};

export default FooterContent;
