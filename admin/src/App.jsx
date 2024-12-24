import React, { useContext } from "react";
import Login from "./page/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/Admin/Dashboard";
import AllApointments from "./page/Admin/AllApointments";
import DoctorsList from "./page/Admin/DoctorsList";
import AddDoctor from "./page/Admin/AddDoctor";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllApointments />} />
          <Route path="/doctors-list" element={<DoctorsList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
