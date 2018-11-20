import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './FooterContent.scss';

const FooterContent = ({ children, className, pullRight, ...rest }) => {
  const classes = classNames('footer-content', pullRight ? 'float-right' : 'float-left', className);
  return (
    <p className={classes} {...rest}>
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
