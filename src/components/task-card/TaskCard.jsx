import Badge from "../badge/badge";
import "../task-card/TaskCard.css";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  const getBadgeStyle = () => {
    switch (props.status) {
      case "ToDo":
        return "grey";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      case "Pending":
        return "orange";
      default:
        return "grey";
    }
  };

  return (
    <div className="card-wapper">
      <div className="card-header">
        <p className="task-id">{props.Id}</p>
        <Badge label={props.status} color={getBadgeStyle()} />
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
