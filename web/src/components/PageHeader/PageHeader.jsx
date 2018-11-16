import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.scss';

const PageHeader = ({ className, subtitle, title, ...rest }) => {
  const subtitleElement = subtitle ? <p className="lead">{subtitle}</p> : null;

  return (
    <div className={`page-header ${className}`} {...rest}>
      <h1>{title}</h1>
      {subtitleElement}
      <hr />
    </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

PageHeader.defaultProps = {
  className: '',
  subtitle: null
};

export default PageHeader;
