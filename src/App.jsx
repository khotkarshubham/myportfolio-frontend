import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import AdminLogin from './pages/Admin/Login'
import AdminDashboard from './pages/Admin/Dashboard'
import AdminProjects from './pages/Admin/Projects'
import AdminBlogs from './pages/Admin/Blogs'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute>
                <AdminBlogs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
