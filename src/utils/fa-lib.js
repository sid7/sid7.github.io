import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCodepen,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(faCodepen, faGithub, faLinkedin);

window.faLib = library;