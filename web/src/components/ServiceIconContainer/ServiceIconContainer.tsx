import { IconLookup, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import classNames from 'classnames';
import React, { Component, Dispatch } from 'react';
import { Action } from 'redux';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

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

class ServiceIconContainer extends Component<ServiceIconContainerProps, ServiceIconContainerState> {
  constructor(props: ServiceIconContainerProps) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  public render() {
    const { className, iconName, isConnected, label, serviceId, ...rest } = this.props;

    const icons: IconLookup[] = [
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

    return (
      <ServiceIcon
        badgeIcon={badgeIcon}
        className={classes}
        icon={[selectedIcon.prefix, selectedIcon.iconName]}
        label={label}
        onConnect={(event: any) =>
          this.props.addConnection(this.props.serviceId, this.props.userId)
        }
        onMouseOut={() => this.setHover(false)}
        onMouseOver={() => this.setHover(true)}
        {...rest}
      />
    );
  }

  private setHover = (isHover: boolean) => {
    this.setState({
      isHover
    });
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: ServiceIconContainerOwnProps) => {
  return {
    addConnection: async (serviceId: string, userId: string) => {
      try {
        await axios.post('/api/connections', {
          serviceId,
          userId: 'auth0|5be62025165bea1f5ba3e665' // TODO: get userId dynamically
        });
      } catch (error) {
        ownProps.alert.error('Unable to add connection.');
      }
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    userId: state.user.user_id
  };
};

export default withAlert<ServiceIconContainerOwnProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ServiceIconContainer)
);
