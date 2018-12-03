import classNames from 'classnames';
import React from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import './HomePage.scss';

const HomePage: React.FunctionComponent<any> = ({ className }) => {
  return (
    <div className={classNames('home-page', className)}>
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
