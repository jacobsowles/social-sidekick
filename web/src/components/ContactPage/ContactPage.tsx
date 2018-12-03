import classNames from 'classnames';
import React from 'react';

import Page from '@components/Page';
import './ContactPage.scss';

export interface ContactPageProps {
  className?: string;
}

const ContactPage: React.FunctionComponent<ContactPageProps> = ({ className, ...rest }) => {
  return (
    <Page className={classNames('contact-page', className)} title="Contact" {...rest}>
      <p>Page content</p>
    </Page>
  );
};

ContactPage.defaultProps = {
  className: ''
};

export default ContactPage;
