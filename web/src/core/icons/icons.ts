import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faCube,
  faLink,
  faMapMarkerAlt,
  faSignOutAlt,
  faSpinner,
  faTimes,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export const init = (): void => {
  library.add(
    faCheck,
    faCube,
    faGithub,
    faFacebook,
    faLink,
    faMapMarkerAlt,
    faQuestionCircle,
    faSignOutAlt,
    faSpinner,
    faTimes,
    faTwitter,
    faUsers
  );
};
