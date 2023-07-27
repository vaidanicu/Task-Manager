import TaskCard from "../task-card/TaskCard";
import "../task-viewer/TaskViewer.css";
import ControlPanel from "../control-panel/ControlPanel";

function TaskViewer(props) {
  const todoItems = props.taskList.filter((item) => item.status === "ToDo");

  return (
    <div className="task-viewer-container">
      <ControlPanel OnNewTaskAdd={props.OnNewTaskAdd} />
      <div className="task-list-container">
        {todoItems.map((item) => {
          return (
            <TaskCard
              key={item.id}
              Id={item.id}
              status={item.status}
              Name={item.Name}
              dueDate={item.dueDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskViewer;
