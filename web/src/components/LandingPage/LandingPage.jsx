import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from '@components/Page';
import './LandingPage.scss';

const LandingPage = ({ className, ...rest }) => {
  return (
    <Page
      className={classNames('landing-page', className)}
      title="Landing Page"
      subtitle="Page subtitle"
      {...rest}
    >
      <p>Page content</p>
    </Page>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string
};

LandingPage.defaultProps = {
  className: undefined
};

export default LandingPage;
