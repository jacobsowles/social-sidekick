import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { PureComponent, Dispatch } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setError } from '@actions/error.actions';
import { FetchUserAction, fetchUserSuccess } from '@actions/user.actions';
import AuthService from '@core/auth';

interface PostAuthPageDispatchProps {
  fetchUser: () => void;
}

type PostAuthPageProps = PostAuthPageDispatchProps;

class PostAuthPage extends PureComponent<PostAuthPageProps> {
  public componentDidMount() {
    this.props.fetchUser();
  }

  public render() {
    return <Redirect to="/home" />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<FetchUserAction>) => {
  return {
    fetchUser: () => {
      const authService = new AuthService();
      authService.fetchUser((error: Auth0Error, user: Auth0UserProfile) => {
        if (user) {
          dispatch(fetchUserSuccess(user));
        } else {
          dispatch(setError(error.error));
        }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostAuthPage);
