import * as React from 'react';
import classNames from 'classnames';
import IFooterContent from './IFooterContent';
import './FooterContent.scss';

const FooterContent: React.FunctionComponent<IFooterContent> = ({
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
