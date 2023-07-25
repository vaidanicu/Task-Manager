import React, { useState } from "react";
import "./CreateTaskForm.css";
const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task=", dueDate);
    console.log("2=", taskName);
    console.log("3=", taskDetails);

    const newTask = {
      Name: taskName,
      dueDate: dueDate,
      taskDetails: taskDetails,
      status: "ToDo",
    };
    props.addNewTask(newTask);

    //Controlled inputs
    setTaskName("");
    setDueDate("");
    setTaskDetails("");

    console.log(newTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            //Controlled inputs
            value={taskName}
            name="taskName"
            onChange={handleNameChange}
            className="input-primary"
            type="text"
          />
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            value={dueDate}
            name="dueData"
            onChange={handleDateChange}
            className="input-primary"
            type="date"
          />
        </div>
        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            value={taskDetails}
            name="taskDetails"
            onChange={handleDetailsChange}
            className="input-primary"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="button-primary" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
