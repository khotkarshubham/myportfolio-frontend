import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost(){
  const { slug } = useParams();
  return (<div><h2>Blog: {slug}</h2><p>Blog post content.</p></div>)
}
