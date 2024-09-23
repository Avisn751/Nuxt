import { defineNuxtPlugin } from "#app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUser,
  faMapMarkerAlt,
  faEnvelope,
  faCalendarAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faGoogle, // Import the Google icon
} from "@fortawesome/free-brands-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  // Add all the icons to the library, including Google
  library.add(
    faUser,
    faMapMarkerAlt,
    faEnvelope,
    faCalendarAlt,
    faLock,
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faGoogle // Add Google icon to the library
  );

  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
