import React, { PureComponent } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import ApiService from '@core/api';
import GitHubModule from './GitHubModule';

interface GitHubModuleContainerState {
  bio: string;
  blog: string;
  company: string;
  isLoaded: boolean;
  location: string;
}

interface GitHubModuleContainerOwnProps {
  alert: InjectedAlertProp;
  userId: string;
}

interface GitHubModuleContainerDispatchProps {
  getProfileDetails: (userId: string) => any;
  updateProfileDetails: (
    bio: string,
    blog: string,
    company: string,
    location: string,
    userId: string
  ) => any;
}

type GitHubModuleContainerProps = GitHubModuleContainerOwnProps &
  GitHubModuleContainerDispatchProps;

class GitHubModuleContainer extends PureComponent<
  GitHubModuleContainerProps,
  GitHubModuleContainerState
> {
  private initialState: GitHubModuleContainerState;

  constructor(props: GitHubModuleContainerProps) {
    super(props);

    this.state = { bio: '', blog: '', company: '', isLoaded: false, location: '' };
  }

  public async componentDidMount() {
    const detailsResponse = await this.props.getProfileDetails(this.props.userId);
    const data = detailsResponse.data;

    const state = {
      bio: data.bio,
      blog: data.blog,
      company: data.company,
      isLoaded: true,
      location: data.location
    };

    this.initialState = state;
    this.setState(state);
  }

  public render() {
    return (
      <GitHubModule
        bio={this.state.bio}
        blog={this.state.blog}
        company={this.state.company}
        isLoaded={this.state.isLoaded}
        location={this.state.location}
        onCancel={this.onCancel}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }

  private onCancel = (event: any) => {
    event.preventDefault();
    this.setState({
      ...this.initialState,
      isLoaded: true
    });
  };

  private onChange = (event: any, fieldName: string) => {
    event.preventDefault();
    this.setState({ ...this.state, [fieldName]: event.target.value });
  };

  private onSubmit = (event: any) => {
    event.preventDefault();
    this.props.updateProfileDetails(
      this.state.bio,
      this.state.blog,
      this.state.company,
      this.state.location,
      this.props.userId
    );
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: GitHubModuleContainerOwnProps
) => {
  const api = new ApiService();

  return {
    getProfileDetails: async (userId: string): Promise<any> => {
      try {
        return api.getGitHubProfileDetails(userId);
      } catch (error) {
        ownProps.alert.error('Unable to get profile details.');
      }
    },
    updateProfileDetails: async (
      bio: string,
      blog: string,
      company: string,
      location: string,
      userId: string
    ): Promise<any> => {
      try {
        api.updateGitHubProfileDetails(bio, blog, company, location, userId);
        ownProps.alert.success('Profile details saved.');
      } catch (error) {
        ownProps.alert.error('Unable to save profile details.');
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
