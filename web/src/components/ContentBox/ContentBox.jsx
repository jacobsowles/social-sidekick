import React from 'react';
import PropTypes from 'prop-types';
import './ContentBox.scss';

const ContentBox = ({ children, ...rest }) => {
  return (
    <div className="content-box" {...rest}>
      {children}
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default ContentBox;
