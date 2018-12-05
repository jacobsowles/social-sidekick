import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './ContactPage.scss';

const ContactPage: FunctionComponent = () => {
  return (
    <div className="contact-page">
      <ContentBox>
        <PageHeader title="Contact" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

export default ContactPage;
