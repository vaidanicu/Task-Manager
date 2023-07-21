import React, { useState } from "react";
import Badge from "../badge/badge";
import "../task-card/TaskCard.css";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  return (
    <div className="card-wapper">
      <div className="card-header">
        <p className="task-id">{props.Id}</p>
        <Badge status={props.status} />
      </div>

      <div className="card-content">
        <p>{props.Name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
