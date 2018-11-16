import React from 'react';
import PropTypes from 'prop-types';
import './FooterContent.scss';

const FooterContent = ({ children, pullRight, ...rest }) => {
  const className = pullRight ? 'float-right' : 'float-left';
  return (
    <p className={`footer-content ${className}`} {...rest}>
      {children}
    </p>
  );
};

FooterContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  pullRight: PropTypes.bool
};

FooterContent.defaultProps = {
  pullRight: false
};

export default FooterContent;
