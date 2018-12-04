import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Routes from '@components/Routes';
import './Layout.scss';

const Layout: FunctionComponent<any> = () => {
  return (
    <div className="layout">
      <Navbar />
      <Routes />
      <Footer>
        <Footer.Content>&copy; Project Name 2018</Footer.Content>
        <Footer.Content pullRight>
          <a href="https://github.com/jacobsowles/fullstack-boilerplate">
            <FontAwesomeIcon icon={['fab', 'github']} title="This project on GitHub" />
            This project on GitHub
          </a>
        </Footer.Content>
      </Footer>
    </div>
  );
};

export default Layout;
