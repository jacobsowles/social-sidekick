import * as React from 'react';
import classNames from 'classnames';
import Page from '@components/Page';
import IHomePage from './IHomePage';
import './HomePage.scss';

const HomePage: React.FunctionComponent<IHomePage> = ({ className, ...rest }) => {
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
