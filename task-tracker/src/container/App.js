import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import Footer from "../components/Footer";
import About from "../components/About";
import Aux from "../hoc/Auxiliary";

function App() {
  const [show_form, setShowForm] = useState(false);
  const [tasks, setTask] = useState([]);

  //fethcing Task from our fake back-end
  useEffect(() => {
    const fetchTasks = async () => {
      const respone = await fetch("http://localhost:7000/tasks");
      const task_from_server = await respone.json();
      setTask(task_from_server);
    };
    fetchTasks();
  }, []);

  const fetchTask = async (id) => {
    const respone = await fetch(`http://localhost:7000/tasks/${id}`);
    const task_from_server = await respone.json();
    return task_from_server;
  };

  const deleteTaskHandler = async (id) => {
    await fetch(`http://localhost:7000/tasks/${id}`, { method: "DELETE" });

    const filtered_tasks = tasks.filter((task) => task.id !== id);
    setTask(filtered_tasks);
  };

  const toggleRemainderHandler = async (id) => {
    const task_to_toggle = await fetchTask(id);
    const new_task = { ...task_to_toggle, reminder: !task_to_toggle.reminder };

    const respone = await fetch(`http://localhost:7000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_task),
    });

    const data = await respone.json();

    const updated_task = tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    );
    setTask(updated_task);
  };

  const addTaskHandler = async (task) => {
    //finding the maximum ID
    // let id = tasks.reduce(
    //   (max, single_task) => (single_task.id > max ? single_task.id : max),
    //   tasks[0].id
    // );
    // id += 1;
    // const newt_task = { id, ...task };

    const response = await fetch("http://localhost:7000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const new_task = await response.json();
    setTask([...tasks, new_task]);
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
    <Router>
      <div className="container">
        <Header
          toggle_form={() => setShowForm(!show_form)}
          show_form={show_form}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <Aux>
              {form}
              {tasks_displayed}
            </Aux>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
