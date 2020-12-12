import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

const Modal = forwardRef((props, ref) => {
  const [isShow, setIsShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal: () => handleShowModal(),
  }))

  const handleShowModal = () => {
    console.log(1);
    setIsShow(true);
  }

  const handleCloseModal = () => {
    console.log(1)
    setIsShow(false);
  } 

  if (isShow) { 
    return ReactDOM.createPortal(
      <div className='main-modal'>
        <div className='modal-backdrop' onClick={handleCloseModal}></div>
        <div className='modal-dialog'>
          {props.children}
          <span onClick={handleCloseModal} className='modal-close'>x</span>
        </div>
      </div>, document.getElementById('modal-root')
    )
  }
  
  return null;
})

export default Modal;