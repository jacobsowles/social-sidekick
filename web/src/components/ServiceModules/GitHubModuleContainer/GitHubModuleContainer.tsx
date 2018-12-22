import React, { Component } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import ApiService from '@core/api';
import GitHubModule from './GitHubModule';

interface GitHubModuleContainerState {
  profileDetails: {};
}

interface GitHubModuleContainerOwnProps {
  alert: InjectedAlertProp;
  userId: string;
}

interface GitHubModuleContainerDispatchProps {
  getProfileDetails: (userId: string) => any;
}

type GitHubModuleContainerProps = GitHubModuleContainerOwnProps &
  GitHubModuleContainerDispatchProps;

class GitHubModuleContainer extends Component<
  GitHubModuleContainerProps,
  GitHubModuleContainerState
> {
  public profileDetails: any = null;

  constructor(props: GitHubModuleContainerProps) {
    super(props);

    this.state = {
      profileDetails: null
    };
  }

  public async componentDidMount() {
    const detailsResponse = await this.props.getProfileDetails(this.props.userId);
    this.setState({ profileDetails: detailsResponse.data });
  }

  public render() {
    return <GitHubModule profileDetails={this.state.profileDetails} />;
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: GitHubModuleContainerOwnProps
) => {
  return {
    getProfileDetails: async (userId: string): Promise<any> => {
      try {
        const api = new ApiService();
        return api.getGitHubProfileDetails(userId);
      } catch (error) {
        ownProps.alert.error('Unable to get profile details.');
      }
    }
  };
};

export default withAlert(
  connect(
    null,
    mapDispatchToProps
  )(GitHubModuleContainer)
);
