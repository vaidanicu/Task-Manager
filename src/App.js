import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const Id = "T - 1";
  const Status = "ToDo";
  const Name = "Create a Design System for Enum Workspace.";
  const dueDate = new Date(2023, 6, 17);

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
      <header className="App-header">
        <TaskCard
          Id={data[0].id}
          Status={data[0].Status}
          Name={data[0].Name}
          dueDate={data[0].dueDate}
        />
        <TaskCard
          Id={data[1].id}
          Status={data[1].Status}
          Name={data[1].Name}
          dueDate={data[1].dueDate}
        />
        <TaskCard
          Id={data[2].id}
          Status={data[2].Status}
          Name={data[2].Name}
          dueDate={data[2].dueDate}
        />
      </header>
    </div>
  );
}

export default App;
