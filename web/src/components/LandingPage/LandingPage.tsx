import classNames from 'classnames';
import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './LandingPage.scss';

export interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({ className }) => {
  return (
    <div className={classNames('landing-page', className)}>
      <ContentBox>
        <PageHeader title="Landing Page" subtitle="Page subtitle" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

LandingPage.defaultProps = {
  className: undefined
};

export default LandingPage;
