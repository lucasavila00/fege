import * as firebase from "firebase/app";
import "firebase/messaging";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

export const wrapRootElement = ({ element, props }) => {
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(
    "BO3sAUZ7udDO4VykzjTwOGHqOmcVKiLB2VIcyPimkvQ2AGSMzeDxamTngK41QAUNmyUJgGrsHe_y6rs8Ctnh9Sc",
  );
  initializeIcons();
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return element;
};
