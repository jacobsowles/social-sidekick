import React, { FunctionComponent } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';

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
  return (
    <div className="dashboard-page">
      {!serviceModules && <LoadingSpinner />}

      {serviceModules && serviceModules.length === 0 && (
        <ContentBox>
          <PageHeader title="Getting Started" />
          <p>
            Once you <Link to="/connections">connect your social media accounts</Link>, you'll be
            able to manage your profile data on this page.
          </p>
        </ContentBox>
      )}

      {serviceModules &&
        serviceModules.map((serviceModule: any, key: any) => (
          <Accordion key={key}>
            <AccordionItem>
              <AccordionItemTitle>
                <h2>{serviceModule.name}</h2>
              </AccordionItemTitle>
              <AccordionItemBody>
                <ContentBox>{serviceModule.component}</ContentBox>
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  );
};

export default DashboardPage;
