import React from 'react'
import {useState} from 'react'
import './header.css'
import Modal from './Modal'
import Me from '../../images/me.png'

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  function downloadResume(){
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rodel Ramos</h1>
        <h5 className='text-light'>Software Developer</h5>
        <div className='cta'>
          <button className='btn' onClick={downloadResume}>Resume</button>
          <button href="#contact" className='btn btn-primary'>Let's Talk</button>
        </div>
        {modalIsOpen && <Modal onCancel ={closeModalHandler} onConfirm={closeModalHandler}/>}
      
        <div className='me'>
          <img src={Me} alt="me" />
        </div>
      </div>
      
    </header>
  )
}

export default header