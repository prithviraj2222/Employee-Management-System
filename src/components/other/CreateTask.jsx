import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [task, setTask] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    setTask({
      taskTitle,
      taskDescription,
      category,
      taskDate,
      assign,
      failed: false,
      active: false,
      newTask: true,
      completed: false,
    });

    const data = userData;

    data.forEach(function (ele) {
      if (assign == ele.firstName) {
        ele.tasks.push(task);
        ele.taskNumbers.newTask += 1;
      }
    });

    setUserData(data);

    setTaskTitle("");
    setTaskDate("");
    setAssign("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(event) => {
                setTaskTitle(event.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a Ui Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(event) => {
                setTaskDate(event.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assign}
              onChange={(event) => {
                setAssign(event.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc..."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(event) => {
              setTaskDescription(event.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            cols="30"
            rows="10"
            placeholder="Detailed Description of Task"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
