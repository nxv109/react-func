import React, { useRef } from 'react';

import Modal from './Modal';

const Home = () => {
  const modalRef = useRef();

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => modalRef.current.showModal()}>Show modal</button>
      <Modal ref={modalRef}>
        <h2>Title</h2>
        <p>This is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modal</p>
      </Modal>
    </div>
  )
}

export default Home;