import "../task-card/TaskCard.css";

function TaskCard() {
  const taskId = "T - 1";
  const taskStatus = "ToDo";
  const taskName = "Create a Design System for Enum Workspace.";
  const dueDate = new Date(2023, 6, 17);

  return (
    <div className="card-wapper">
      <div className="card-header">
        <p className="task-id">{taskId}</p>
        <div className="badge">
          <p>{taskStatus}</p>
        </div>
      </div>
      <div className="card-content">
        <p>{taskName}</p>
      </div>
      <div className="card-footer">
        <div>
          <p>Due Date</p>
          <p>{dueDate.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
