import React, { useState } from "react";
import { Header } from "../components/Header";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

function App() {
  const [show_form, setShowForm] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "task 1",
      day: "Sept 6th at 1:00 AM",
      reminder: true,
    },
    {
      id: 2,
      text: "task 2",
      day: "Sept 7th at 2:00 AM",
      reminder: false,
    },
    {
      id: 3,
      text: "task 3",
      day: "Sept 8th at 3:00 AM",
      reminder: true,
    },
  ]);

  const deleteTaskHandler = (id) => {
    const filtered_tasks = tasks.filter((task) => task.id !== id);
    setTask(filtered_tasks);
  };

  const toggleRemainderHandler = (id) => {
    const updated_task = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTask(updated_task);
  };

  const addTaskHandler = (task) => {
    //finding the maximum ID
    let id = tasks.reduce(
      (max, single_task) => (single_task.id > max ? single_task.id : max),
      tasks[0].id
    );
    id += 1;
    const newt_task = { id, ...task };
    setTask([...tasks, newt_task]);
  };

  let tasks_displayed = null;
  if (tasks.length > 0) {
    tasks_displayed = (
      <Tasks
        tasks={tasks}
        clicked_cross={deleteTaskHandler}
        clicked_task={toggleRemainderHandler}
      />
    );
  } else {
    tasks_displayed = <h3>No Tasks to Display</h3>;
  }

  let form = null;
  if (show_form) {
    form = <AddTask task_added={addTaskHandler} />;
  }

  return (
    <div className="container">
      <Header
        toggle_form={() => setShowForm(!show_form)}
        show_form={show_form}
      />
      {form}
      {tasks_displayed}
    </div>
  );
}

export default App;
