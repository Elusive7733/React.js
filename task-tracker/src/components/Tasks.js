import Task from "./Task";
const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          clicked_cross={() => props.clicked_cross(task.id)}
          clicked_task={() => props.clicked_task(task.id)}
        />
      ))}
    </>
  );
};

export default Tasks;
