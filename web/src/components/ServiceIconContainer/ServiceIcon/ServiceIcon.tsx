import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import './ServiceIcon.scss';

export interface ServiceIconProps {
  badgeIcon?: IconProp;
  className?: string;
  icon: IconProp;
  label?: string;
  onClick: () => void;
  onMouseOut: () => void;
  onMouseOver: () => void;
}

const ServiceIcon: FunctionComponent<ServiceIconProps> = ({
  badgeIcon,
  className,
  icon,
  label,
  onClick,
  onMouseOut,
  onMouseOver
}) => {
  return (
    <div className={className} onClick={onClick} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
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
