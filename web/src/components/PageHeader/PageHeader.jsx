import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './PageHeader.scss';

const PageHeader = ({ className, subtitle, title, ...rest }) => {
  return (
    <div className={classNames('page-header', className)} {...rest}>
      <h1>{title}</h1>
      {subtitle && <p className="lead">{subtitle}</p>}
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
  className: undefined,
  subtitle: undefined
};

export default PageHeader;
