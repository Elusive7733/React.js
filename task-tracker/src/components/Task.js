import { GiCrossMark } from "react-icons/gi";

const Task = ({ task, clicked_cross, clicked_task }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => clicked_task(task.id)}
      style={{ userSelect: "none" }}
    >
      <h3>
        {task.text}{" "}
        <GiCrossMark
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => clicked_cross(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
