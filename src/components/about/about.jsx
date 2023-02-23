import React from 'react'
import './about.css'
import Me from '../../images/me.png'

const about = () => {
  return (
    <section id = 'about'>
      <p>Get to know</p>
      <h1>About me</h1>
      <p>I am interested to know more about Software Development. I am aspiring software developer based in Tarlac, philippines. My goal is to have more solid knowledge regarding application development especially in software application development. I'm extremely passionate about learning new technologies and I'm always looking for opportunities to further expand my skills and grow as a developer.</p>
      <img src={Me} alt="" />
    </section>
  )
}

export default about