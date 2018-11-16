import React from 'react';
import PropTypes from 'prop-types';
import FooterContent from '@components/FooterContent';
import './Footer.scss';

const Footer = ({ children, ...rest }) => {
  return (
    <footer className="footer" {...rest}>
      <div className="container">{children}</div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

Footer.Content = FooterContent;

export default Footer;
