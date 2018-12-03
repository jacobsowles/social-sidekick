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
  pullRight,
  ...rest
}) => {
  const classes = classNames('footer-content', pullRight ? 'float-right' : 'float-left', className);
  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

FooterContent.defaultProps = {
  className: '',
  pullRight: false
};

export default FooterContent;
