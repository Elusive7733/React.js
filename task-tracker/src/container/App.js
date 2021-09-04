import React, { useState } from "react";
import { Header } from "../components/Header";
import Tasks from "../components/Tasks";

function App() {
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
