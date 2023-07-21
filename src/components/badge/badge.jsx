import "../badge/badge.css";

function Badge(props) {
  return (
    <div className="badge">
      <p>{props.Status}</p>
    </div>
  );
}

export default Badge;
