import React, { useState } from "react";
import Badge from "../badge/badge";
import "../task-card/TaskCard.css";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  const [counter, setCounter] = useState(0);

  console.log("Render" + counter + "" + props.Id);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log("cnt", counter);
  };

  return (
    <div className="card-wapper">
      <div className="card-header">
        <p className="task-id">{props.Id}</p>
        <Badge status={props.status} />
      </div>

      <div className="card-content">
        {/* <p>{props.Name}</p> */}
        <p>{counter}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleClick}>INCREMENT</button>
        {/* <DateContainer date={props.dueDate} /> */}
      </div>
    </div>
  );
}

export default TaskCard;
