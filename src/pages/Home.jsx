import React from 'react'
import SkillList from '../components/SkillList'

export default function Home(){
  return (
    <section className="space-y-6">
      <div style={{display:'flex',gap:20,alignItems:'center'}}>
        <img src="/profile.jpg" alt="profile" style={{width:144,height:144,borderRadius:999,objectFit:'cover',border:'2px solid #e5e7eb'}} />
        <div>
          <h1 style={{fontSize:28,fontWeight:600}}>Shubham Khotkar</h1>
          <p style={{color:'#4b5563'}}>DevOps Engineer & IT Infrastructure Specialist — building reliable systems, CI/CD, cloud infra, and automation.</p>
          <div style={{marginTop:12,gap:8,display:'flex'}}>
            <a href="#" rel="noreferrer">LinkedIn</a>
            <a href="#" rel="noreferrer">GitHub</a>
            <a href="#" rel="noreferrer">X</a>
            <a href="#" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{fontSize:20,fontWeight:500}}>Skills</h2>
        <SkillList />
      </div>

      <div>
        <h2 style={{fontSize:20,fontWeight:500}}>Featured Projects</h2>
        <p>Visit the Projects page for details.</p>
      </div>
    </section>
  )
}
