import React from "react";
import "./ControlPanel.css";
import Modal from "../modal/Modal";
import CreateTaskForm from "../forms/CreateTaskForm";

const ControlPanel = (props) => {
  const { isOpen, setIsOpen, OnNewTaskAdd, taskList } = props;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNewTask = (task) => {
    OnNewTaskAdd(task);
    closeModal();
  };
  return (
    <div className="control-panel-container">
      <div>
        <h3 className="view-title">Task</h3>
        <p className="subtitle">Your tasks in your space.</p>
      </div>
      {taskList.length > 0 && (
        <button onClick={openModal} className="button-primary">
          Create Task
        </button>
      )}

      <Modal onClose={closeModal} isOpen={isOpen}>
        <div className="card-xl">
          <h3>Create task</h3>
          <CreateTaskForm addNewTask={handleNewTask} />
        </div>
      </Modal>
    </div>
  );
};

export default ControlPanel;
