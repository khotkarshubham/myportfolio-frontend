// frontend/src/pages/Admin/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <nav className="space-y-2">
        <Link to="/admin/pages" className="block underline">Edit Pages</Link>
        <Link to="/admin/projects" className="block underline">Manage Projects</Link>
        <Link to="/admin/blogs" className="block underline">Manage Blogs</Link>
      </nav>
    </div>
  );
}
