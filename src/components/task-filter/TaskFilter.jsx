import React, { useContext } from "react";
import FilterItme from "./FilterItem";
import { TodoContext } from "../../App";
import { StatusContext } from "../task-viewer/TaskViewer";

const taskFilterItems = [
  "All Tasks",
  "ToDo",
  "In Progress",
  "Pending",
  "Completed",
];

const TaskFilter = () => {
  const todoItems = useContext(TodoContext);
  const { selectedStatus, setSelectedStatus } = useContext(StatusContext);
  console.log(todoItems);

  const getCountByStatus = (status) => {
    return todoItems.filter((item) => {
      if (status === "All Tasks") {
        return true;
      }
      return item.status === status;
    }).length;
  };

  return (
    <div className="filter-container">
      {taskFilterItems.map((item, index) => (
        <FilterItme
          active={selectedStatus === item}
          key={item}
          label={item}
          count={getCountByStatus(item)}
          onStatusClick={() => {
            setSelectedStatus(item);
          }}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
