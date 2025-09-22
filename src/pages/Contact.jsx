import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: You can hook this to backend or email service later
    console.log("Form submitted:", form);
    alert("Thank you! We have received your request.");
    setForm({ name: "", email: "", phone: "", purpose: "" });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold">Contact Me</h2>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-lg shadow">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Contact Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Purpose</label>
          <textarea
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
            rows="3"
            required
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>

      {/* Your contact details */}
      <div className="border p-6 rounded-lg shadow bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">My Contact Details</h3>
        <p>
          <strong>Whatsapp:</strong>{" "}
          <a href="https://wa.me/917758882964" target="_blank" rel="noreferrer">
            +91 7758882964
          </a>
        </p>
        <p>
          <strong>Call:</strong> <a href="tel:+917758882964">+91 7758882964</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:khotkarshubham@gmail.com">khotkarshubham@gmail.com</a>
        </p>
      </div>
    </div>
  );
}