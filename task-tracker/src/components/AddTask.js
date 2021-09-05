import { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const task_added = (event) => {
    event.preventDefault();

    if (!text) {
      alert("Task can not be empty!");
      return;
    }
    if (!day) {
      alert("Day can not be empty!");
      return;
    }

    props.task_added({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={task_added}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Day & Time..."
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
