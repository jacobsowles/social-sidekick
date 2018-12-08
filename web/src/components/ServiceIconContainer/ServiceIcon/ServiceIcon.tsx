import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import './ServiceIcon.scss';

export interface ServiceIconProps {
  badgeIcon?: IconProp;
  className?: string;
  icon: IconProp;
  label?: string;
  onConnect: (event: any) => void;
  onMouseOut: () => void;
  onMouseOver: () => void;
}

const ServiceIcon: FunctionComponent<ServiceIconProps> = ({
  badgeIcon,
  className,
  icon,
  label,
  onConnect,
  onMouseOut,
  onMouseOver
}) => {
  return (
    <div
      className={className}
      onClick={onConnect}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      {badgeIcon && (
        <span className="badge">
          <FontAwesomeIcon icon={badgeIcon} />
        </span>
      )}

      <FontAwesomeIcon icon={icon} size="4x" />

      {label && <p className="service-icon-label">{label}</p>}
    </div>
  );
};

export default ServiceIcon;
