import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import PageHeader from '@components/PageHeader';
import ServiceIcon from '@components/ServiceIcon';
import './ConnectionsPage.scss';

export interface ConnectionsPageProps {
  className?: string;
}

const ConnectionsPage: FunctionComponent<ConnectionsPageProps> = ({ className }) => {
  return (
    <main className={classNames('connections-page', className)}>
      <ContentBox>
        <PageHeader title="Connected Services" />
      </ContentBox>
      <ContentBox>
        <PageHeader
          title="Connect Additional Services"
          subtitle="Log into the services below to connect them to your Social Sidekick account."
        />
        <ServiceIcon iconName="github" label="GitHub" />
      </ContentBox>
    </main>
  );
};

ConnectionsPage.defaultProps = {
  className: undefined
};

export default ConnectionsPage;
