import React, { useState, useRef, useEffect } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [countA, setCountA] = useState(0);
  const prevCount = useRef(count);

  console.log('re-render');

  useEffect(() => {
    console.log('Re-run');
    prevCount.current = count;

  }, [count])

  const handleIncrease = () => {
    setCount(count => count + 1);
  }

  return (
    <div>
      <h1>About page</h1>
      <p>Count useRef: {prevCount.current}</p>
      <p>Count useState: {count}</p>
      <p>Count useStateA: {countA}</p>
      <button onClick={() => setCountA(countA + 1)}>IncreaseA</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default About;
