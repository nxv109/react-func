import React from 'react';
import './App.css';
import ReactImageZoom from 'react-image-zoom';

function App() {
  const props = {width: 400, height: 400, zoomWidth: 500, zoomPosition: "default", img: "vinh-tri-thuc.jpg"};

  return (
    <div className="App">
      <ReactImageZoom  {...props} />
    </div>
  );
}

export default App;
