import * as React from 'react';
import classNames from 'classnames';
import Page from '@components/Page';
import './ContactPage.scss';

type ContactPageProps = {
  className?: string;
};

const ContactPage: React.FunctionComponent<ContactPageProps> = ({ className, ...rest }) => {
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
