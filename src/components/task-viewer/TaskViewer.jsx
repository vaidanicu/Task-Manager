import TaskCard from "../task-card/TaskCard";
import "../task-viewer/TaskViewer.css";
import ControlPanel from "../control-panel/ControlPanel";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";
import { useState } from "react";

function TaskViewer(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="task-viewer-container">
      <ControlPanel
        taskList={props.taskList}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        OnNewTaskAdd={props.OnNewTaskAdd}
      />

      <div className="task-list-container">
        {props.taskList.length > 0 ? (
          <div className="task-list-grid">
            {props.taskList.map((item) => {
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
        ) : (
          <EmptyListMessage onCreateTaskCrick={setIsOpen} />
        )}
      </div>
    </div>
  );
}

export default TaskViewer;
