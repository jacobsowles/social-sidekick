import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faCube,
  faSignOutAlt,
  faSpinner,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export const init = (): void => {
  library.add(
    faCheck,
    faCube,
    faGithub,
    faQuestionCircle,
    faSignOutAlt,
    faSpinner,
    faTimes,
    faTwitter
  );
};
