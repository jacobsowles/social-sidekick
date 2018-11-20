import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from '@components/Page';
import './ContactPage.scss';

const ContactPage = ({ className, ...rest }) => {
  return (
    <Page className={classNames('contact-page', className)} title="Contact" {...rest}>
      <p>Page content</p>
    </Page>
  );
};

ContactPage.propTypes = {
  className: PropTypes.string
};

ContactPage.defaultProps = {
  className: undefined
};

export default ContactPage;
