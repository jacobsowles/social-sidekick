import React, { FunctionComponent } from 'react';
import Collapsible from 'react-collapsible';

import './Collapsible.scss';

//// BOX ////

interface BoxProps {
  className?: string;
}

const Box: FunctionComponent<BoxProps> = ({ children, className, ...rest }) => {
  // TODO: Do some validation on this. Require the first child to be a trigger, etc.
  const trigger = (children as any[])[0];
  const body = (children as any[])[1];

  return (
    <Collapsible className={className} transitionTime={200} trigger={trigger} {...rest}>
      {body}
    </Collapsible>
  );
};

Box.displayName = 'Collapsible.Box';

//// TRIGGER ////

const Trigger: FunctionComponent = ({ children }) => {
  return <>{children}</>;
};

Trigger.displayName = 'Collapsible.Trigger';

//// BODY ////

const Body: FunctionComponent = ({ children }) => {
  return <>{children}</>;
};

Body.displayName = 'Collapsible.Body';

export default { Box, Trigger, Body };
