import { IconLookup, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import React, { Component } from 'react';

import ServiceIcon from './ServiceIcon';

export interface ServiceIconContainerProps {
  className?: string;
  iconName: string;
  isConnected: boolean;
  label?: string;
  size?: SizeProp;
}

export interface ServiceIconContainerState {
  isHover: boolean;
}

class ServiceIconContainer extends Component<ServiceIconContainerProps, ServiceIconContainerState> {
  public static defaultProps = {
    className: undefined as string,
    label: undefined as string,
    size: '4x'
  };

  constructor(props: ServiceIconContainerProps) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  public render() {
    const { className, iconName, isConnected, label, size, ...rest } = this.props;

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
        onMouseOut={() => this.setHover(false)}
        onMouseOver={() => this.setHover(true)}
        size={size}
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

export default ServiceIconContainer;
