import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("aToken");
    setAToken("");
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center gap-2">
        <img src={assets.admin_logo} alt="" className="h-8" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
