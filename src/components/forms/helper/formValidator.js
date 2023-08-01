export const validateForm = (taskName, dueDate, taskDetails) => {
  let taskNameErrorMessage = "";
  let dueDataErrorMessage = "";
  let taskDetailsErrorMessage = "";
  let isFromValid = true;

  if (taskName.length === 0) {
    taskNameErrorMessage = "This field is Required!";
    isFromValid = false;
  } else if (taskName.length <= 3) {
    taskNameErrorMessage = "Trebuie sa aiba mai multe de 3 caractere";
    isFromValid = false;
  }

  if (taskDetails.length === 0) {
    taskDetailsErrorMessage = "This field is Required!";
    isFromValid = false;
  } else if (taskDetails.length <= 10) {
    taskDetailsErrorMessage = "Trebuie sa aiba mai multe de 10 caractere";
    isFromValid = false;
  }

  if (dueDate.length === 0) {
    dueDataErrorMessage = "This field is Required!";
    isFromValid = false;
  } else if (new Date(dueDate).getTime() < new Date().getTime()) {
    dueDataErrorMessage = "Task due time cannot be less than current date!";
  }

  return {
    taskName: taskNameErrorMessage,
    dueDate: dueDataErrorMessage,
    taskDetails: taskDetailsErrorMessage,
    isValid: isFromValid,
  };
};
