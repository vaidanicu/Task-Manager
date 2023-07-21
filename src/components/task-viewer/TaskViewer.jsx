import TaskCard from "../task-card/TaskCard";
import "../task-viewer/TaskViewer.css";

function TaskViewer(props) {
  return (
    <div className="task-viewer-container">
      <div className="task-list-container">
        {props.taskList.map((item, index) => {
          return (
            <TaskCard
              //sau ley={item.id}
              key={index}
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
