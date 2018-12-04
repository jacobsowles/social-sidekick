import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './ContactPage.scss';

export interface ContactPageProps {
  className?: string;
}

const ContactPage: FunctionComponent<ContactPageProps> = ({ className }) => {
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
  className: undefined
};

export default ContactPage;
