import React from 'react';

import GitHubModule from '@components/ServiceModules/GitHubModule';

class ServiceModuleFactory {
  public static getServiceModule = (serviceName: string): any => {
    const serviceModule = {
      component: undefined as any,
      name: serviceName
    };

    switch (serviceName.toLowerCase()) {
      case 'github':
        serviceModule.component = <GitHubModule />;
    }

    return serviceModule;
  };
}

export default ServiceModuleFactory;
