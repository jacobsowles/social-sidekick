import * as React from 'react';
import classNames from 'classnames';
import Page from '@components/Page';
import IContactPage from './IContactPage';
import './ContactPage.scss';

const ContactPage: React.FunctionComponent<IContactPage> = ({ className, ...rest }) => {
  return (
    <Page className={classNames('contact-page', className)} title="Contact" {...rest}>
      <p>Page content</p>
    </Page>
  );
};

ContactPage.defaultProps = {
  className: undefined
};

export default ContactPage;
