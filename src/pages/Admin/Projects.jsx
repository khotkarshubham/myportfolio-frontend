// frontend/src/pages/Admin/Projects.jsx
import React, { useEffect, useState } from "react";
import API from "../../services/api";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const load = async () => {
    const res = await API.get("/public/projects");
    setProjects(res.data);
  };

  const create = async (e) => {
    e.preventDefault();
    await API.post(
      "/admin/project",
      { title, description },
      { headers: { Authorization: `Bearer ${localStorage.getItem("admin_token")}` } }
    );
    setTitle("");
    setDescription("");
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Projects</h2>
      <form onSubmit={create} className="space-y-2 mt-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2">Add Project</button>
      </form>

      <ul className="mt-6 space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="border p-2 rounded">
            <strong>{p.title}</strong> — {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
