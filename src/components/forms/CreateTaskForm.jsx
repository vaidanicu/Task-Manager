import React, { useState } from "react";
import "./CreateTaskForm.css";
const CreateTaskForm = () => {
  // const [taskName, setTaskName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const [taskDetails, setTaskDetails] = useState("");

  const [formData, setFormData] = useState({
    taskName: "",
    dueData: "",
    taskDetails: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newTask = {
    //   name: taskName,
    //   dueDate: dueDate,
    //   taskDetails: taskDetails,
    //   status: "ToDo",
    // };

    console.log("formData", formData);
  };

  const handleInputChange = (event) => {
    console.log(event.target.name);
    setFormData((prevDate) => {
      return {
        ...prevDate,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            name="taskName"
            onChange={handleInputChange}
            className="input-primary"
            type="text"
          />
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            name="dueData"
            onChange={handleInputChange}
            className="input-primary"
            type="date"
          />
        </div>
        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            name="taskDetails"
            onChange={handleInputChange}
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
