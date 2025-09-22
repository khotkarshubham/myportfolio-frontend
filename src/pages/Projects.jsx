import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/public/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.id} className="border p-4 rounded shadow-sm">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p>{p.description}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline block mt-2"
                >
                  View Project
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
