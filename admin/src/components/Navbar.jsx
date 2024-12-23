import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);

  const handleLogout = () => {
    localStorage.removeItem("aToken");
    setAToken("");
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center gap-2">
        <img src={assets.admin_logo} alt="" className="h-8" />
        <p className="font-semibold">{aToken ? "Admin" : "Doctor"}</p>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
