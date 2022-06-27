import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {FaHandshake} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#services"><FaHandshake/></a>
      <a href="#skills"><FaBrain/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav