import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2 text-center">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      <div id="allTasks">
        {userData.map(function (ele, idx) {
          return (
            <div key={idx} className="border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2 text-center">
              <h2 className="text-lg font-medium w-1/5">{ele.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{ele.taskNumbers.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{ele.taskNumbers.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">{ele.taskNumbers.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">{ele.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
