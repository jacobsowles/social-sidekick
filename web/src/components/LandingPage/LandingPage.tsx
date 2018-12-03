import classNames from 'classnames';
import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './LandingPage.scss';

export interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('landing-page', className)} {...rest}>
      <ContentBox>
        <PageHeader title="Landing Page" subtitle="Page subtitle" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

LandingPage.defaultProps = {
  className: ''
};

export default LandingPage;
