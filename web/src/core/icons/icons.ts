import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const init = (): void => {
  library.add(faCube, faGithub, faQuestionCircle, faSignOutAlt);
};
