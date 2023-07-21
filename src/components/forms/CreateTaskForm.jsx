import React from "react";
import "./CreateTaskForm.css";
const CreateTaskForm = () => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
  };

  const handleDetailsChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            onChange={handleNameChange}
            className="input-primary"
            type="text"
          />
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            onChange={handleDateChange}
            className="input-primary"
            type="date"
          />
        </div>
        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            onChange={handleDetailsChange}
            className="input-primary"
            name=""
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
