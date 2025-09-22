import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/public/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Failed to load blogs:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map((b) => (
          <div key={b.id} className="mb-6 border-b pb-4">
            <Link
              to={`/blog/${b.slug}`}
              className="text-xl font-semibold text-blue-600 underline"
            >
              {b.title}
            </Link>
            <p className="text-gray-600">{b.excerpt}</p>
          </div>
        ))
      )}
    </div>
  );
}
