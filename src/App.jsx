import React, { useState } from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";
import CreateTaskForm from "./components/forms/CreateTaskForm";
import Modal from "./components/modal/Modal";

const data = [
  {
    id: "T - 1",
    status: "ToDo",
    Name: "Create a Design System for Enum Workspace.",
    dueDate: new Date(2023, 6, 7),
  },
  {
    id: "T - 2",
    status: "In Progress",
    Name: "Ex2",
    dueDate: new Date(2023, 1, 17),
  },
  {
    id: "T - 3",
    status: "Complete",
    Name: "ex3",
    dueDate: new Date(2023, 7, 27),
  },
  {
    id: "T - 4",
    status: "Complete",
    Name: "ex3",
    dueDate: new Date(2023, 7, 27),
  },
  {
    id: "T - 5",
    status: "Complete",
    Name: "ex3",
    dueDate: new Date(2023, 7, 27),
  },
];

function App() {
  const [taskList, setTaskList] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const OnNewTaskAdd = (newTask) => {
    console.log("task from App.js", newTask);
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length + 1,
      },
    ]);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <div className="app-content">
        <TaskViewer onCreateClick={openModal} taskList={taskList} />

        <div className="side-bar-right">
          {/* <div className="card-xl">
            <h3>Create task</h3>
            <CreateTaskForm addNewTask={OnNewTaskAdd} />
          </div> */}
        </div>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <div className="card-xl">
          <h3>Create task</h3>
          <CreateTaskForm addNewTask={OnNewTaskAdd} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
