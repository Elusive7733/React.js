import Task from "./Task";
import Aux from "../hoc/Auxiliary";

const Tasks = (props) => {
  return (
    <Aux>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          clicked_cross={() => props.clicked_cross(task.id)}
          clicked_task={() => props.clicked_task(task.id)}
        />
      ))}
    </Aux>
  );
};

export default Tasks;
