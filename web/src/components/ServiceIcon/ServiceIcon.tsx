import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { Component } from 'react';

import './ServiceIcon.scss';

export interface ServiceIconProps {
  className?: string;
  iconName: string;
  isConnected: boolean;
  label?: string;
  size?:
    | 'xs'
    | 'sm'
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

export interface ServiceIconState {
  isHover: boolean;
}

interface IconProp {
  prefix: any;
  iconName: any;
}

class ServiceIcon extends Component<ServiceIconProps, ServiceIconState> {
  public static defaultProps = {
    className: undefined as string,
    label: undefined as string,
    size: '4x'
  };

  constructor(props: any) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  public render() {
    const { className, iconName, isConnected, label, size, ...rest } = this.props;

    const icons: IconProp[] = [
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

    return (
      <div
        className={classes}
        onMouseOut={() =>
          this.setState({
            isHover: false
          })
        }
        onMouseOver={() => this.setState({ isHover: true })}
      >
        {isConnected && (
          <span className="badge">
            {this.state.isHover ? (
              <FontAwesomeIcon icon="times" />
            ) : (
              <FontAwesomeIcon icon="check" />
            )}
          </span>
        )}

        <FontAwesomeIcon
          icon={[selectedIcon.prefix, selectedIcon.iconName]}
          size={size}
          {...rest}
        />

        {label && <p className="service-icon-label">{label}</p>}
      </div>
    );
  }
}

export default ServiceIcon;
