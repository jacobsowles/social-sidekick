import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import './ServiceIcon.scss';

export interface ServiceIconProps {
  badgeIcon?: IconProp;
  className?: string;
  icon: IconProp;
  label?: string;
  onMouseOut: () => void;
  onMouseOver: () => void;
  size: SizeProp;
}

const ServiceIcon: FunctionComponent<ServiceIconProps> = ({
  badgeIcon,
  className,
  icon,
  label,
  onMouseOut,
  onMouseOver,
  size
}) => {
  return (
    <div className={className} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
      {badgeIcon && (
        <span className="badge">
          <FontAwesomeIcon icon={badgeIcon} />
        </span>
      )}

      <FontAwesomeIcon icon={icon} size={size} />

      {label && <p className="service-icon-label">{label}</p>}
    </div>
  );
};

export default ServiceIcon;
