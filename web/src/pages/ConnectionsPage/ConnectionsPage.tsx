import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import LoadingSpinner from '@components/LoadingSpinner';
import PageHeader from '@components/PageHeader';
import ServiceIconContainer from '@components/ServiceIconContainer';
import { UserService } from '@core/types';
import './ConnectionsPage.scss';

export interface ConnectionsPageProps {
  className?: string;
  services: UserService[] | null;
  userId?: string;
}

const ConnectionsPage: FunctionComponent<ConnectionsPageProps> = ({ className, services }) => {
  return (
    <main className={classNames('connections-page', className)}>
      <ContentBox>
        <PageHeader
          title="Connect Services"
          subtitle="Log into the services below to connect them to your Social Sidekick account."
        />
        {(!services || services.length === 0) && <LoadingSpinner />}
        {services &&
          services.map((service: UserService) => (
            <ServiceIconContainer
              iconName={service.name.toLowerCase()}
              isConnected={service.isConnected}
              key={service._id}
              label={service.name}
              serviceId={service._id}
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
