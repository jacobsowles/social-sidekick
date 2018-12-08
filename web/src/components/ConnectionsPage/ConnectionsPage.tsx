import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import LoadingSpinner from '@components/LoadingSpinner';
import PageHeader from '@components/PageHeader';
import ServiceIconContainer from '@components/ServiceIconContainer';
import { UserService } from '@core/types';
import './ConnectionsPage.scss';

export interface ConnectionsPageProps {
  services: UserService[];
  className?: string;
}

const ConnectionsPage: FunctionComponent<ConnectionsPageProps> = ({ services, className }) => {
  return (
    <main className={classNames('connections-page', className)}>
      <ContentBox>
        <PageHeader
          title="Connect Services"
          subtitle="Log into the services below to connect them to your Social Sidekick account."
        />
        {(!services || services.length === 0) && <LoadingSpinner />}
        {services &&
          services.map((service: UserService, key: number) => (
            <ServiceIconContainer
              iconName={service.name.toLowerCase()}
              isConnected={service.isConnected}
              key={key}
              label={service.name}
            />
          ))}
      </ContentBox>
    </main>
  );
};

ConnectionsPage.defaultProps = {
  className: undefined
};

export default ConnectionsPage;
