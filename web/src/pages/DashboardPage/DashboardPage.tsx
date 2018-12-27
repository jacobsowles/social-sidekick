import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Collapsible from '@components/Collapsible';
import ContentBox from '@components/ContentBox';
import LoadingSpinner from '@components/LoadingSpinner';
import PageHeader from '@components/PageHeader';
import { UserService } from '@core/types';
import './DashboardPage.scss';

export interface DashboardPageProps {
  serviceModules: any[] | null;
  services: UserService[] | null;
  userId?: string;
}

const DashboardPage: FunctionComponent<DashboardPageProps> = ({ serviceModules }) => {
  return <div className="dashboard">{getDashboardContent(serviceModules)}</div>;
};

const getDashboardContent = (serviceModules: any[]) => {
  if (!serviceModules) {
    return <LoadingSpinner />;
  }

  if (serviceModules.length === 0) {
    return (
      <ContentBox>
        <PageHeader title="Getting Started" />
        <p>
          Once you <Link to="/connections">connect your social media accounts</Link>, you'll be able
          to manage your profile data on this page.
        </p>
      </ContentBox>
    );
  }

  return serviceModules.map((serviceModule: any, key: any) => (
    <Collapsible.Box className={`${serviceModule.name.toLowerCase()}-collapsible`} key={key}>
      <Collapsible.Trigger>
        <FontAwesomeIcon icon={['fab', serviceModule.name.toLowerCase()]} size="3x" />
        <h1>{serviceModule.name}</h1>
      </Collapsible.Trigger>
      <Collapsible.Body>{serviceModule.component}</Collapsible.Body>
    </Collapsible.Box>
  ));
};

export default DashboardPage;
