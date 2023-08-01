import clsx from "clsx";
import Badge from "../badge/badge";
import "./TaskFilter.css";
const FilterItme = (props) => {
  return (
    <div
      onClick={props.onStatusClick}
      className={clsx("filter-item-container", props.active && "active")}
    >
      <p className={clsx("filter-option", props.active && "active")}>
        {props.label}
      </p>
      <Badge
        label={props.count}
        color={clsx({
          blue: props.active,
          black: props.active,
        })}
      />
    </div>
  );
};

export default FilterItme;
