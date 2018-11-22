import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Page from '@components/Page';
import './LandingPage.scss';

type LandingPageProps = {
  className?: string;
};

const LandingPage: FunctionComponent<LandingPageProps> = ({ className, ...rest }) => {
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
  className: undefined
};

export default LandingPage;
