import classNames from 'classnames';
import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './HomePage.scss';

export interface HomePageProps {
  className?: string;
}

const HomePage: React.FunctionComponent<HomePageProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('home-page', className)} {...rest}>
      <ContentBox>
        <PageHeader title="Home" />
        <p>Page content</p>
      </ContentBox>
    </div>
  );
};

HomePage.defaultProps = {
  className: ''
};

export default HomePage;
