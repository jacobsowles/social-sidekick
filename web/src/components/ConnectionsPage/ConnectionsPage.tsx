import classNames from 'classnames';
import React from 'react';

import ServiceIcon from '@components/ServiceIcon';
import Page from '@components/Page';
import './ConnectionsPage.scss';

export interface ConnectionsPageProps {
  className?: string;
}

const ConnectionsPage: React.FunctionComponent<ConnectionsPageProps> = ({ className }) => {
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
  className: ''
};

export default ConnectionsPage;
