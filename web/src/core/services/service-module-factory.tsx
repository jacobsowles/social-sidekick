import React from 'react';

import GitHubModuleContainer from '@components/ServiceModules/GitHubModuleContainer';

class ServiceModuleFactory {
  public static getServiceModule = (serviceName: string, userId: string): any => {
    const serviceModule = {
      component: undefined as any,
      name: serviceName
    };

    switch (serviceName.toLowerCase()) {
      case 'github':
        serviceModule.component = <GitHubModuleContainer userId={userId} />;
    }

    return serviceModule;
  };
}

export default ServiceModuleFactory;
