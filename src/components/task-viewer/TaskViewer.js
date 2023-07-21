import TaskCard from "../task-card/TaskCard";
import "../task-viewer/TaskViewer.css";

function TaskViewer(props) {
  return (
    <div className="task-viewer-container">
      <div className="task-list-container">
        {props.taskList.map((item) => {
          return (
            <TaskCard
              Id={item.id}
              Status={item.Status}
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
