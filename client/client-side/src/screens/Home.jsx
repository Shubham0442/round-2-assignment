import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/List";

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:8080/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("users", res);
        setUsers(res?.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (users.length === 0) {
      setTimeout(() => {
        getUsers();
      }, 1000);
    }
  }, [users.length]);

  return (
    <div>
      <button onClick={() => navigate("/adduser")}>Add User</button>
      <button onClick={() => navigate("/addgroup")}>Add Group</button>
      <h4>Users List</h4>
      <List users={users} />
    </div>
  );
};

export default Home;
