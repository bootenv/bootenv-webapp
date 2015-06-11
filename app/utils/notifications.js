function addNotification(config) {
  BootenvWebapp.__container__.lookup("notification-messages:service").addNotification(config);
}

export function handleError(result) {
  addNotification({
    message: "Could not save your changes, please try again in a few moments.",
    type: "error"
  });

  throw result;
}

export function handleLoginError(result) {
  var message = "Error logging in, please try again in a few moments.";

  if (result && result.error && result.error.code === 'LOGIN_FAILED') {
    message = "Invalid username or password";
  }

  addNotification({
    message: message,
    type: "error"
  });

  throw result;
}
