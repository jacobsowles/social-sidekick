import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { PureComponent, Dispatch } from 'react';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { FetchUserAction, fetchUserSuccess } from '@actions/user.actions';
import AuthService from '@core/auth';

interface PostAuthPageOwnProps {
  alert: any;
}

interface PostAuthPageDispatchProps {
  fetchUser: () => void;
}

type PostAuthPageProps = PostAuthPageOwnProps & PostAuthPageDispatchProps;

class PostAuthPage extends PureComponent<PostAuthPageProps> {
  public componentDidMount() {
    this.props.fetchUser();
  }

  public render() {
    return <Redirect to="/home" />;
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<FetchUserAction>,
  ownProps: PostAuthPageOwnProps
) => {
  return {
    fetchUser: () => {
      const authService = new AuthService();
      authService.fetchUser((error: Auth0Error, user: Auth0UserProfile) => {
        if (user) {
          dispatch(fetchUserSuccess(user));
        } else {
          ownProps.alert.error(error.error);
        }
      });
    }
  };
};

export default withAlert(
  connect(
    null,
    mapDispatchToProps
  )(PostAuthPage)
);
