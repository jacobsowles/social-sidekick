import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Auth0UserProfile } from 'auth0-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import { AppState } from '@core/types';

library.add(faCube, faGithub, faQuestionCircle, faSignOutAlt);

interface AppOwnProps {
  history: any;
  location: any;
  match: any;
}

interface AppStateProps {
  user?: Auth0UserProfile;
}

type AppProps = AppOwnProps & AppStateProps;

class App extends Component<AppProps, AppState> {
  public render() {
    return <Layout user={this.props.user} />;
  }
}

const mapStateToProps = (state: AppState): AppStateProps => {
  return {
    user: state.auth.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
