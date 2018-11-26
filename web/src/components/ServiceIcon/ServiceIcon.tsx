import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IServiceIcon from './IServiceIcon';
import './ServiceIcon.scss';

const ServiceIcon: React.FunctionComponent<IServiceIcon> = ({
  children,
  className,
  icon,
  label,
  size,
  ...rest
}) => {
  return (
    <div className={classNames('service-icon', className)}>
      <FontAwesomeIcon icon={icon} size={size} {...rest} />
      {label && <p className="service-icon-label">{label}</p>}
    </div>
  );
};

ServiceIcon.defaultProps = {
  className: undefined,
  label: undefined,
  size: '4x'
};

export default ServiceIcon;
