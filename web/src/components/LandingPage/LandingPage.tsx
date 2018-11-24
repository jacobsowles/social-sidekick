import * as React from 'react';
import classNames from 'classnames';
import Page from '@components/Page';
import ILandingPage from './ILandingPage';
import './LandingPage.scss';

const LandingPage: React.FunctionComponent<ILandingPage> = ({ className, ...rest }) => {
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
