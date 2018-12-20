import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './HomePage.scss';

const HomePage: React.FunctionComponent = () => {
  return (
    <div className="home-page">
      <ContentBox>
        <PageHeader title="Home" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

export default HomePage;
