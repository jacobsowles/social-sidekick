import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUserBegin, fetchUserSuccess, fetchUserFailure } from '@actions/auth.actions';
import AuthService from '@core/auth';

interface PostAuthPageDispatchProps {
  fetchUser: (...args: any[]) => any;
}

type PostAuthPageProps = PostAuthPageDispatchProps;

class PostAuthPage extends Component<PostAuthPageProps> {
  public componentDidMount() {
    this.props.fetchUser();
  }

  public render() {
    return <Redirect to="/home" />;
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: () => {
      const authService = new AuthService();
      dispatch(fetchUserBegin());

      authService.fetchUser((error: any, user: any) => {
        if (user) {
          dispatch(fetchUserSuccess(user));
        } else {
          dispatch(fetchUserFailure(error));
        }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostAuthPage);
