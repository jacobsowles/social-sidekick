import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './FooterContent.scss';

type FooterContentProps = {
  className?: string;
  pullRight?: boolean;
};

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
  className: undefined,
  pullRight: false
};

export default FooterContent;
