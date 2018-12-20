import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './ContactPage.scss';

const ContactPage: FunctionComponent = () => {
  return (
    <div className="contact-page">
      <ContentBox>
        <PageHeader title="Contact" />
        <p>
          Questions? Comments? Feel free to get in touch via&nbsp;
          <a href="mailto:jacob@jacobsowles.com">email</a> or&nbsp;
          <a href="https://github.com/jacobsowles/social-sidekick">GitHub</a>.
        </p>
      </ContentBox>
    </div>
  );
};

export default ContactPage;
