import React, { useState } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks);

  const handleComplete = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, active: false, completed: true, newTask: false };
        }
        return task;
      });
    });
  };

  const handleFailed = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, active: false,completed: false, failed: true, newTask: false };
        }
        return task;
      });
    });
  };

  return (
    <div
      id="taskList"
      className="overflow-x-auto h-[55%] py-5 w-full mt-10 flex justify-start items-center gap-5 flex-nowrap"
    >
      {tasks.map((ele) => {
        if (ele.active) {
          return (
            <AcceptTask key={ele.id} data={ele} onComplete={handleComplete} onFailed={handleFailed}/>
          );
        }

        if (ele.newTask) {
          const hasActiveTask = tasks.some((task) => task.active);
          if (!hasActiveTask) {
            return <NewTask key={ele.id} data={ele} />;
          }
        }

        if (ele.completed) {
          return <CompleteTask key={ele.id} data={ele} />;
        }

        if (ele.failed) {
          return <FailedTask key={ele.id} data={ele} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
