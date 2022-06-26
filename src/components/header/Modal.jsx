import React from 'react'
import CV from '../../images/CV.png'


const Modal = (props) => {

  function cancelHandler(){
    props.onCancel();
  }

  function confirmHandler(){
    props.onConfirm();
  }

  return (
    <div className='modal'>
       <h3>Download Resume?</h3>
       <button className='btn'onClick={cancelHandler}>Cancel</button>
       <a href={CV}download><button className='btn' onClick={confirmHandler}>Confirm</button></a>
    </div>
  )
}

export default Modal;