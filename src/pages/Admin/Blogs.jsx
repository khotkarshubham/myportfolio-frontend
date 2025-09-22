// frontend/src/pages/Admin/Blogs.jsx
import React, { useState, useEffect } from "react";
import API from "../../services/api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const load = async () => {
    const res = await API.get("/public/blogs");
    setBlogs(res.data);
  };

  const create = async (e) => {
    e.preventDefault();
    await API.post(
      "/admin/blog",
      { title, slug, content },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
      }
    );
    setTitle("");
    setSlug("");
    setContent("");
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Blogs</h2>
      <form onSubmit={create} className="space-y-2 mt-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Slug (e.g. my-first-blog)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <ReactQuill value={content} onChange={setContent} />
        <button className="bg-black text-white px-4 py-2 mt-2">
          Add Blog
        </button>
      </form>

      <ul className="mt-6 space-y-2">
        {blogs.map((b) => (
          <li key={b.id} className="border p-2 rounded">
            <strong>{b.title}</strong> ({b.slug})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminBlogs;   // ✅ this line is required