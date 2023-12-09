import React,{useEffect} from 'react'
import Navbar from './../../components/Navbar/Navbar.jsx'

function About() {
  useEffect(()=>{
    document.title="Budget Files - About"
  },[])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default About