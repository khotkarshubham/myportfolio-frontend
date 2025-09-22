// frontend/src/pages/Admin/Login.jsx
import React, { useState } from "react";
import API, { setToken } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      const token = res.data.token;

      if (token) {
        // Save token in localStorage
        localStorage.setItem("admin_token", token);
        // Set default header for API requests
        setToken(token);
        // Redirect to dashboard
        navigate("/admin");
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("Login failed");
    }
  };

  return (
    <form
      onSubmit={submit}
      style={{ maxWidth: 420, margin: "0 auto", display: "grid", gap: 8 }}
    >
      <h2>Admin Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}