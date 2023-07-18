import TaskCard from "../task-card/TaskCard";
import "../task-viewer/TaskViewer.css";

function TaskViewer(props) {
  return (
    <header className="App-header">
      <TaskCard
        Id={props.taskList[0].id}
        Status={props.taskList[0].Status}
        Name={props.taskList[0].Name}
        dueDate={props.taskList[0].dueDate}
      />
      <TaskCard
        Id={props.taskList[1].id}
        Status={props.taskList[1].Status}
        Name={props.taskList[1].Name}
        dueDate={props.taskList[1].dueDate}
      />
      <TaskCard
        Id={props.taskList[2].id}
        Status={props.taskList[2].Status}
        Name={props.taskList[2].Name}
        dueDate={props.taskList[2].dueDate}
      />
    </header>
  );
}

export default TaskViewer;
