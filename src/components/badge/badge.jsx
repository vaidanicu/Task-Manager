import "../badge/badge.css";

const Badge = (props) => {
  const getBadgeStyle = () => {
    switch (props.status) {
      case "Todo":
        return "badge-todo";
      case "In Progress":
        return "badge-in-progress";
      case "Peanding":
        return "badge-pending";
      case "Complete":
        return "badge-completed";
      default:
        return "badge-todo";
    }
  };

  return (
    <div className={`badge ${getBadgeStyle()}`}>
      <p>{props.status}</p>
    </div>
  );
};

export default Badge;
