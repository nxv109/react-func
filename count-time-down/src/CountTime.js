import { useEffect, useState } from "react";

function CountTime({ timeSetting, onEnd }) {
  const [count, setCount] = useState(timeSetting);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 0) {
          return prevCount - 1;
        }

        clearInterval(timer);
        return timeSetting;
      });
    }, 1000);

    if (count < 0) onEnd(false);

    return () => clearInterval(timer);
  }, [timeSetting, onEnd, count]);

  return <div className="count-time">Time: {count}</div>;
}

export default CountTime;
