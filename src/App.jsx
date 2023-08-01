import React, { useState, createContext } from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

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
    status: "Completed",
    Name: "ex3",
    dueDate: new Date(2023, 7, 27),
  },
  {
    id: "T - 5",
    status: "Pending",
    Name: "ex3",
    dueDate: new Date(2023, 7, 27),
  },
];

export const TodoContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(data);

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
  };

  return (
    <div className="App">
      <div className="app-content">
        <TodoContext.Provider value={taskList}>
          <TaskViewer OnNewTaskAdd={OnNewTaskAdd} taskList={taskList} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
