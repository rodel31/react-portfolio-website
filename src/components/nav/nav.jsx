import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {FaHandshake} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home")
  return (
    <nav >
      <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active": ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active": ""}><AiOutlineBook/></a>
      <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "active": ""}><FaHandshake/></a>
      <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "active": ""}><FaBrain/></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active": ""}><AiOutlineFolderOpen/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active": ""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav