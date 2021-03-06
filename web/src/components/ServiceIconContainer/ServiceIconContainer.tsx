import { IconLookup, IconProp } from '@fortawesome/fontawesome-svg-core';
import axios, { AxiosResponse } from 'axios';
import classNames from 'classnames';
import React, { Dispatch, PureComponent } from 'react';
import { Action } from 'redux';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

import { removeConnection } from '@actions/connection.actions';
import { AppState } from '@core/types';
import ServiceIcon from './ServiceIcon';

export interface ServiceIconContainerOwnProps {
  alert: any;
  className?: string;
  iconName: string;
  isConnected: boolean;
  label?: string;
  serviceId: string;
}

export interface ServiceIconContainerDispatchProps {
  addConnection: (serviceId: string, userId: string) => void;
  removeConnection: (serviceId: string, userId: string) => void;
}

export interface ServiceIconContainerStateProps {
  userId: string;
}

type ServiceIconContainerProps = ServiceIconContainerOwnProps &
  ServiceIconContainerDispatchProps &
  ServiceIconContainerStateProps;

export interface ServiceIconContainerState {
  isHover: boolean;
}

class ServiceIconContainer extends PureComponent<
  ServiceIconContainerProps,
  ServiceIconContainerState
> {
  constructor(props: ServiceIconContainerProps) {
    super(props);
    this.state = { isHover: false };
  }

  public render() {
    const { className, iconName, isConnected, label, serviceId, userId, ...rest } = this.props;
    const icons: IconLookup[] = [
      { iconName: 'facebook', prefix: 'fab' },
      { iconName: 'github', prefix: 'fab' },
      { iconName: 'twitter', prefix: 'fab' }
    ];

    let selectedIcon = icons.find(i => i.iconName === iconName);

    if (!selectedIcon) {
      selectedIcon = {
        iconName: 'question-circle',
        prefix: 'far'
      };
    }

    const classes = classNames(
      'service-icon',
      { 'service-icon-connected': isConnected },
      'service-icon-' + selectedIcon.iconName,
      this.props.className
    );

    const badgeIcon: IconProp = isConnected ? (this.state.isHover ? 'times' : 'check') : undefined;
    const onClick = isConnected
      ? () => this.props.removeConnection(serviceId, userId)
      : () => this.props.addConnection(serviceId, userId);

    return (
      <>
        <ServiceIcon
          badgeIcon={badgeIcon}
          className={classes}
          icon={[selectedIcon.prefix, selectedIcon.iconName]}
          label={label}
          onClick={onClick}
          onMouseOut={() => this.setHover(false)}
          onMouseOver={() => this.setHover(true)}
          {...rest}
        />
      </>
    );
  }

  private setHover = (isHover: boolean) => {
    this.setState(state => ({
      ...state,
      isHover
    }));
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: ServiceIconContainerOwnProps) => {
  return {
    addConnection: async (serviceId: string, userId: string) => {
      try {
        const authResponse: AxiosResponse = await axios.post(
          '/api/connections/authorize/github/auth-url',
          {
            serviceId,
            userId
          }
        );
        window.location = authResponse.data.url;
      } catch (error) {
        ownProps.alert.error('Unable to add connection.');
      }
    },
    removeConnection: async (serviceId: string, userId: string) => {
      try {
        await axios.post('/api/connections/remove', { serviceId, userId });
        await dispatch(removeConnection(serviceId));
        ownProps.alert.info('Service disconnected.');
      } catch (error) {
        ownProps.alert.error('Unable to disconnect service.');
      }
    }
  };
};

const mapStateToProps = (state: AppState): ServiceIconContainerStateProps => {
  return {
    userId: state.user.sub
  };
};

export default withAlert<ServiceIconContainerOwnProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ServiceIconContainer)
);
