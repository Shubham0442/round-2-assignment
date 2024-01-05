import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import AddUser from "../screens/AddUser";
import AddGroup from "../screens/AddGroup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/addgroup" element={<AddGroup />} />
    </Routes>
  );
};

export default AllRoutes;
