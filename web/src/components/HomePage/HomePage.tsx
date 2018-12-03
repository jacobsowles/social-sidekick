import classNames from 'classnames';
import React from 'react';

import Page from '@components/Page';
import './HomePage.scss';

export interface HomePageProps {
  className?: string;
}

const HomePage: React.FunctionComponent<HomePageProps> = ({ className, ...rest }) => {
  return (
    <Page className={classNames('home-page', className)} title="Home" {...rest}>
      <p>Page content</p>
    </Page>
  );
};

HomePage.defaultProps = {
  className: ''
};

export default HomePage;
