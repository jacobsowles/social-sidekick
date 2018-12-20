import React, { FunctionComponent } from 'react';

import ContentBox from '@components/ContentBox';
import LoadingSpinner from '@components/LoadingSpinner';
import PageHeader from '@components/PageHeader';
import { UserService } from '@core/types';
import './DashboardPage.scss';

interface DashboardPageProps {
  serviceModules: any[] | null;
  services: UserService[] | null;
  userId?: string;
}

const DashboardPage: FunctionComponent<DashboardPageProps> = ({ serviceModules }) => {
  return <div className="dashboard-page" />;
};

export default DashboardPage;
