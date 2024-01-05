import React from "react";

const List = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Mobile No</th>
            <th>Group Name</th>
          </tr>
        </thead>
        <tbody>
          {users?.length !== 0 &&
            users?.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.mobile}</td>
                <td>{el.group ? el.group : "-"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
