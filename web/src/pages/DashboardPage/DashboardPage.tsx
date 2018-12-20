import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './DashboardPage.scss';

const DashboardPage: FunctionComponent = () => {
  return (
    <div className="dashboard-page">
      <ContentBox>
        <PageHeader title="Dashboard" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

export default DashboardPage;
