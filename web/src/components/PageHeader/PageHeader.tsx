import * as React from 'react';
import classNames from 'classnames';
import IPageHeader from './IPageHeader';
import './PageHeader.scss';

const PageHeader: React.FunctionComponent<IPageHeader> = ({
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
