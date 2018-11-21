import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from '@components/Page';
import './HomePage.scss';

const HomePage = ({ className, ...rest }) => {
  return (
    <Page className={classNames('home-page', className)} title="Home" {...rest}>
      <p>Page content</p>
    </Page>
  );
};

HomePage.propTypes = {
  className: PropTypes.string
};

HomePage.defaultProps = {
  className: undefined
};

export default HomePage;
