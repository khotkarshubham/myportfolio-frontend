// frontend/src/pages/Admin/ChangePassword.jsx
import React, { useState } from "react";
import API from "../../services/api";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post(
        "/auth/change-password",
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      );
      alert("Password changed successfully");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      alert("Password change failed");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-2 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Change Password</h2>
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border p-2 w-full"
      />
      <button className="bg-black text-white px-4 py-2">Update</button>
    </form>
  );
}