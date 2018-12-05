import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './LandingPage.scss';

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className="landing-page">
      <ContentBox>
        <PageHeader title="Landing Page" subtitle="Page subtitle" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

export default LandingPage;
