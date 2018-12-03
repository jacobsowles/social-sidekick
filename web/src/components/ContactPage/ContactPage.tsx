import classNames from 'classnames';
import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './ContactPage.scss';

export interface ContactPageProps {
  className?: string;
}

const ContactPage: React.FunctionComponent<ContactPageProps> = ({ className }) => {
  return (
    <div className={classNames('contact-page', className)}>
      <ContentBox>
        <PageHeader title="Contact" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

ContactPage.defaultProps = {
  className: ''
};

export default ContactPage;
