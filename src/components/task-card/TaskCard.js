import Badge from "../badge/badge";
import "../task-card/TaskCard.css";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  let taskId = props.id;

  const handleClick = () => {
    console.log("Click" + props.Id);
    taskId = taskId + "Clicked!";
  };

  return (
    <div className="card-wapper">
      <div className="card-header">
        <p className="task-id">{taskId}</p>
        <Badge status={props.status} />
      </div>

      <div className="card-content">
        <p>{props.Name}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleClick}>ClickMe</button>
        <DateContainer date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
