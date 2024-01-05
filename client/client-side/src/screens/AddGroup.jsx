import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGroup = () => {
  const [showList, setShowList] = useState(false);
  const [userList, setUserList] = useState([]);
  const [list, setList] = useState([]);
  const [groupname, setGroupname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userList.length === 0) {
      fetch("http://localhost:8080/users/ungrouped")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log("users", res);
          setUserList(res?.users);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userList]);

  const handleChange = (e) => {
    const newList = [...list];
    const id = e.target.value;
    console.log(id);

    if (list.includes(id)) {
      const index = newList.indexOf(id);
      console.log("index", index);
      newList.splice(index, 1);
    } else {
      newList.push(id);
    }
    setList(newList);
  };

  const updateUsers = () => {
    fetch("http://localhost:8080/users/update", {
      method: "PATCH",
      body: JSON.stringify({ users: list, groupname: groupname }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = () => {
    if (groupname !== "" && list.length !== 0) {
      fetch("http://localhost:8080/group/add", {
        method: "POST",
        body: JSON.stringify({ groupname: groupname, users: list }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          updateUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h4>Add Group</h4>
      <label>Group Name: </label>
      <input
        type="text"
        name="groupname"
        value={groupname}
        onChange={(e) => setGroupname(e.target.value)}
        placeholder="Please add group name"
      />
      <div
        style={{ border: "1px solid", width: "100px", margin: "auto" }}
        onClick={() => {
          setShowList(!showList);
        }}
      >
        Select users
      </div>
      {showList && (
        <div>
          {userList.length !== 0 &&
            userList.map((el) => (
              <div key={el._id}>
                <input type="checkbox" value={el._id} onChange={handleChange} />
                {el.firstname} {el.lastname}
              </div>
            ))}
        </div>
      )}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddGroup;
