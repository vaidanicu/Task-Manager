import "../task-card/TaskCard.css";

function TaskCard() {
  return (
    <div className="card-wapper">
      <div className="card-header">
        <p className="task-id">T-1</p>
        <div className="badge">
          <p>ToDo</p>
        </div>
      </div>
      <div className="card-content">
        <p>Create a Design System for Enum Workspace.</p>
      </div>
      <div className="card-footer">
        <div>
          <p>Due Date</p>
          <p>17/07/2023</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
