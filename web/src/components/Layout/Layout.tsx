import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Auth0UserProfile } from 'auth0-js';
import moment from 'moment';
import React, { FunctionComponent } from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import RoutesContainer from '@components/RoutesContainer';
import './Layout.scss';

export interface LayoutProps {
  handleLogout: () => void;
  user?: Auth0UserProfile;
}

const Layout: FunctionComponent<LayoutProps> = ({ handleLogout, user }) => {
  return (
    <div className="layout">
      <Navbar
        handleLogout={handleLogout}
        picture={user ? user.picture : undefined}
        username={user ? user.name : undefined}
      />
      <RoutesContainer />
      <Footer>
        <Footer.Content>&copy; Social Sidekick {moment().year()}</Footer.Content>
        <Footer.Content pullRight>
          <a href="https://github.com/jacobsowles/social-sidekick">
            <FontAwesomeIcon icon={['fab', 'github']} title="This project on GitHub" />
            This project on GitHub
          </a>
        </Footer.Content>
      </Footer>
    </div>
  );
};

Layout.defaultProps = {
  user: undefined
};

export default Layout;
