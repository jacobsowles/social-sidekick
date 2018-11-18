import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FooterContent from '@components/FooterContent';
import './Footer.scss';

const Footer = ({ children, className, ...rest }) => {
  return (
    <footer className={classNames('footer', className)} {...rest}>
      <div className="container">{children}</div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string
};

Footer.defaultProps = {
  className: undefined
};

Footer.Content = FooterContent;

export default Footer;
