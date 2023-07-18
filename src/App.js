import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";
import TaskContainer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T - 1",
      Status: "ToDo",
      Name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 6, 7),
    },
    {
      id: "T - 2",
      Status: "In Progress",
      Name: "Ex2",
      dueDate: new Date(2023, 1, 17),
    },
    {
      id: "T - 3",
      Status: "Complete",
      Name: "ex3",
      dueDate: new Date(2023, 7, 27),
    },
  ];

  return (
    <div className="App">
      <TaskViewer taskList={data} />
    </div>
  );
}

export default App;
