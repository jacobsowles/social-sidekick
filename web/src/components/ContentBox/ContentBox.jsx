import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ContentBox.scss';

const ContentBox = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('content-box', className)} {...rest}>
      {children}
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default ContentBox;
