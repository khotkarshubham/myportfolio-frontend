import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header style={{borderBottom:'1px solid #eef2f7',padding:12}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link to="/"><strong>DevOps Portfolio</strong></Link>
        <nav style={{display:'flex',gap:12}}>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
