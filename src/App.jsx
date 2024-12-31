import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  const [userData, setUserData] = useContext(AuthContext);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role : "admin"}));
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password);
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role : "employee", data:employee}));  
      }
    } else {
      alert("invalid user");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null)}
    </>
  );
};

export default App;
