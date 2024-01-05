import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    group: null
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/users/add", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>Add New User</h4>
      <br />
      <form onSubmit={handleSave}>
        <label>Firstname: </label>
        <input
          type="text"
          name="firstname"
          placeholder="Please add first name"
          value={newUser.firstname}
          onChange={handleChange}
        />
        <br />
        <label>Listname: </label>
        <input
          type="text"
          name="lastname"
          placeholder="Please add last name"
          value={newUser.lastname}
          onChange={handleChange}
        />
        <br />
        <label>Mobile: </label>
        <input
          type="number"
          name="mobile"
          placeholder="Please add mobile number"
          value={newUser.mobile}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddUser;
