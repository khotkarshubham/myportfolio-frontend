// frontend/src/pages/Admin/Skills.jsx
import React, { useState, useEffect } from "react";
import API from "../../services/api";

export default function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");

  const load = async () => {
    const res = await API.get("/public/skills");
    setSkills(res.data);
  };

  const create = async (e) => {
    e.preventDefault();
    await API.post(
      "/admin/skill",
      { name },
      { headers: { Authorization: `Bearer ${localStorage.getItem("admin_token")}` } }
    );
    setName("");
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Skills</h2>
      <form onSubmit={create} className="space-y-2 mt-4">
        <input
          className="border p-2 w-full"
          placeholder="Skill name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2">Add Skill</button>
      </form>

      <ul className="mt-6 space-y-2">
        {skills.map((s) => (
          <li key={s.id} className="border p-2 rounded">{s.name}</li>
        ))}
      </ul>
    </div>
  );
}