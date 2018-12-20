import React, { Component } from 'react';

import GitHubModule from '@components/GitHubModule';

class ServiceFactory {
  public static getServiceComponent = (serviceId: string): any => {
    switch (serviceId) {
      case '5c09afdfe7179a6ca084156d': // TODO: This is obviously absurd. We'll do this dynamically later.
        return <GitHubModule />;

      default:
        return null;
    }
  };
}

export default ServiceFactory;
