// frontend/src/pages/Admin/Dashboard.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>

      <nav className="space-y-2">
        <Link to="/admin/pages" className="block underline">
          Edit Pages
        </Link>
        <Link to="/admin/projects" className="block underline">
          Manage Projects
        </Link>
        <Link to="/admin/blogs" className="block underline">
          Manage Blogs
        </Link>
        <Link to="/admin/skills" className="block underline">
          Manage Skills
        </Link>
        <Link to="/admin/change-password" className="block underline">
          Change Password
        </Link>
      </nav>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
}