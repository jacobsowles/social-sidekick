import classNames from 'classnames';
import React from 'react';

import Page from '@components/Page';
import './LandingPage.scss';

export interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({ className, ...rest }) => {
  debugger;
  return (
    <Page
      className={classNames('landing-page', className)}
      title="Landing Page"
      subtitle="Page subtitle"
      {...rest}
    >
      <p>Page content</p>
    </Page>
  );
};

LandingPage.defaultProps = {
  className: ''
};

export default LandingPage;
