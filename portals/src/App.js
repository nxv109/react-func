import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const modelId = document.getElementById('modal');

function Modal({ children }) {
  const div = document.createElement('div');

  React.useEffect(() => {
    modelId.appendChild(div);

    return () => {
      modelId.removeChild(div);
    };

  }, [div]);

  return ReactDOM.createPortal(children, div);
}

function App() {
  const [ isModal, setIsModel ] = React.useState(false);

  return (
    <div className="App">
      <h1>This is my portal</h1>
      <button onClick={ () => setIsModel(true) }>SHOW MODEL</button>
      {
        isModal
        ? (
          <Modal>
            <p>Hello, my name is Vinh, I'm from Quang Nam province and I very love my family and hometown</p>
            <button onClick={ () => setIsModel(false) }>HIDE MODEL</button>
          </Modal>
        ) : null
      }
    </div>
  );
}

export default App;
