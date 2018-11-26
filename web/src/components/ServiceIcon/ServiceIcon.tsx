import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IServiceIcon from './IServiceIcon';
import './ServiceIcon.scss';

const ServiceIcon: React.FunctionComponent<IServiceIcon> = ({
  children,
  className,
  iconName,
  label,
  size,
  ...rest
}) => {
  const icons: IconProp[] = [{ iconName: 'github', prefix: 'fab' }];
  let selectedIcon = icons.find(i => i.iconName === iconName);

  if (!selectedIcon) {
    selectedIcon = {
      iconName: 'question-circle',
      prefix: 'far'
    };
  }

  return (
    <div className={classNames('service-icon', className)}>
      <FontAwesomeIcon icon={[selectedIcon.prefix, selectedIcon.iconName]} size={size} {...rest} />
      {label && <p className="service-icon-label">{label}</p>}
    </div>
  );
};

ServiceIcon.defaultProps = {
  className: undefined,
  label: undefined,
  size: '4x'
};

interface IconProp {
  prefix: any;
  iconName: any;
}

export default ServiceIcon;
