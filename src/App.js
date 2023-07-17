import "./App.css";
import MyFirstComponent from "./components/MyFirstComponent";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <TaskCard />
      </header>
    </div>
  );
}

export default App;
