import React from 'react'

export default function Footer(){
  return (
    <footer style={{borderTop:'1px solid #eef2f7',padding:20,textAlign:'center'}}>
      <div className="container">© {new Date().getFullYear()} Shubham Khotkar — Built with ChatGPT ❤️</div>
    </footer>
  )
}
