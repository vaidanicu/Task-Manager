import TaskCard from "../task-card/TaskCard";
import "../task-viewer/TaskViewer.css";
import ControlPanel from "../control-panel/ControlPanel";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";
import { useState, createContext } from "react";

export const StatusContext = createContext();

function TaskViewer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");

  const displayedItems = props.taskList.filter((item) => {
    if (selectedStatus === "All Tasks") {
      return true;
    }
    return item.status === selectedStatus;
  });

  return (
    <div className="task-viewer-container">
      <StatusContext.Provider value={{ selectedStatus, setSelectedStatus }}>
        <ControlPanel
          taskList={props.taskList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          OnNewTaskAdd={props.OnNewTaskAdd}
        />
      </StatusContext.Provider>
      <div className="task-list-container">
        {props.taskList.length > 0 ? (
          <div className="task-list-grid">
            {displayedItems.map((item) => {
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
