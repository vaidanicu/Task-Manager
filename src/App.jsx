import React from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
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

  //afisare metoda din biblioteca React
  // return React.createElement(
  //   `div`,
  //   {
  //     className: "App",
  //   },
  //   React.createElement(
  //     `div`,
  //     { className: "app-content" },
  //     React.createElement("h1", {}, ""),
  //     React.createElement(TaskViewer, { taskList: data })
  //   )
  // );
  // afisare normala jsx

  return (
    <div className="App">
      <div className="app-content">
        <h1>Task Manager</h1>
        <TaskViewer taskList={data} />
      </div>
    </div>
  );
}

export default App;
