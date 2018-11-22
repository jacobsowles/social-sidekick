import * as React from 'react';
import classNames from 'classnames';
import FooterContent from '@components/FooterContent';
import './Footer.scss';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...rest }) => {
  return (
    <footer className={classNames('footer', className)} {...rest}>
      <div className="container">{children}</div>
    </footer>
  );
};

Footer.defaultProps = {
  className: undefined
};

Footer.Content = FooterContent;

export default Footer;
