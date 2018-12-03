import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './PageHeader.scss';

export interface PageHeaderProps {
  className?: string;
  subtitle?: string;
  title: string;
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  className,
  subtitle,
  title,
  ...rest
}) => {
  return (
    <div className={classNames('page-header', className)} {...rest}>
      <h1>{title}</h1>
      {subtitle && <p className="lead">{subtitle}</p>}
      <hr />
    </div>
  );
};

PageHeader.defaultProps = {
  className: undefined,
  subtitle: undefined
};

export default PageHeader;
