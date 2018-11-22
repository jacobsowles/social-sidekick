import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Page from '@components/Page';
import './HomePage.scss';

type HomePageProps = {
  className?: string;
};

const HomePage: FunctionComponent<HomePageProps> = ({ className, ...rest }) => {
  return (
    <Page className={classNames('home-page', className)} title="Home" {...rest}>
      <p>Page content</p>
    </Page>
  );
};

HomePage.defaultProps = {
  className: undefined
};

export default HomePage;
