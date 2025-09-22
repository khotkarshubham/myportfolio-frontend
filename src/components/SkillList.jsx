import React from 'react'

const skills = [
  'Kubernetes', 'Terraform', 'AWS', 'GCP', 'CI/CD (Jenkins, GitHub Actions)', 'Ansible', 'Linux', 'Prometheus', 'Grafana'
]

export default function SkillList(){
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:8}}>
      {skills.map(s=> (
        <div key={s} style={{padding:8,border:'1px solid #e5e7eb',borderRadius:6,fontSize:14}}>{s}</div>
      ))}
    </div>
  )
}
