import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './LandingPage.scss';

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className="landing-page">
      <ContentBox>
        <PageHeader title="All of your profiles in one place" />
        <p>
          New job? Congratulations! But now you're faced with the laborious task of updating your
          employer on all of your social networks.
        </p>
        <p>Looking to revamp your personal brand? Time to update all of your bios.</p>
        <p>
          Life changes fast and often. No more blocking off half an hour every time you need to
          update your profiles. No more digging through menus trying to remember where the settings
          are. No more forgetting to update certain profiles. Just sign up, connect your accounts,
          and reclaim your time with Social Sidekick.
        </p>
      </ContentBox>
    </div>
  );
};

export default LandingPage;
