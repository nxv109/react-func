import { useState } from 'react';
import CountTime from './CountTime';

import './App.css';

function App() {
  const [isShowTimer, setIsShowTimer] = useState(false);

  const handleCountTimeDown = (isEnd) => {
    setIsShowTimer(isEnd);
  };

  return (
    <div className="App">
      {isShowTimer ? (
        <CountTime timeSetting={3} onEnd={handleCountTimeDown} />
      ) : (
        <button onClick={() => setIsShowTimer(true)}>Resend a code to verify email</button>
      )}
    </div>
  );
}

export default App;
