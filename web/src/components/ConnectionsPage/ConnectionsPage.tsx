import React from 'react';
import classNames from 'classnames';
import ServiceIcon from '@components/ServiceIcon';
import Page from '@components/Page';
import IConnectionsPage from './IConnectionsPage';
import './ConnectionsPage.scss';

const ConnectionsPage: React.FunctionComponent<IConnectionsPage> = ({ className, ...rest }) => {
  return (
    <main className={classNames('connections-page', className)}>
      <Page.ContentBox>
        <Page.Header title="Connected Services" />
      </Page.ContentBox>
      <Page.ContentBox>
        <Page.Header
          title="Connect Additional Services"
          subtitle="Log into the services below to connect them to your Social Sidekick account."
        />
        <ServiceIcon iconName="github" label="GitHub" />
      </Page.ContentBox>
    </main>
  );
};

ConnectionsPage.defaultProps = {
  className: undefined
};

export default ConnectionsPage;
