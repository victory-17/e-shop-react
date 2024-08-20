import React from "react";
import "react-notifications/lib/notifications.css";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class Notification extends React.Component {
  createNotification = (type, msg, func) => {   
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info(msg);
          break;
        case "success":
          NotificationManager.success(msg);
          break;
        case "warning":
          NotificationManager.warning(msg, "Close after 3000ms", 3000);
          break;
        case "error":
          NotificationManager.error(msg, "Click me to delete", 5000, () => {
            func();
          });
          break;
      }
    };
  };

  render() {
    return <NotificationContainer />;
  }
}

export default Notification;
