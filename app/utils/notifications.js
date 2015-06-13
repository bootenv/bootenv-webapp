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

export function confirmDelete(what, then, immediate) {
  if (immediate) {
    then();
    return;
  }

  bootbox.dialog({
    title: "Delete " + what + "?",
    message: "Are you sure you want to delete this " + what + "?",
    className: "modal-danger",
    buttons: {
      success: {
        label: "Delete",
        className: "btn btn-outline pull-left",
        callback: then
      },
      danger: {
        label: "Cancel",
        className: "btn btn-outline"
      }
    }
  });
}

export function confirmDiscardChanges(then, otherwise) {
  bootbox.dialog({
    title: "Discard changes?",
    message: "If you continue you will loose the changes you've just made.",
    className: "modal-warning",
    buttons: {
      success: {
        label: "Discard",
        className: "btn btn-outline pull-left",
        callback: then
      },
      danger: {
        label: "Return to editing",
        className: "btn btn-outline",
        callback: otherwise
      }
    }
  });
}
