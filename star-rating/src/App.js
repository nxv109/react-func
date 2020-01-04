import React from 'react';
import './App.css';

function App() {
  const [rating, setRating] = React.useState(Number);
  const [tempRating, setTempRating] = React.useState(Number);
  let stars = [];

  React.useEffect(() => {
    setRating(-1);
    setTempRating(-1);
  }, []);

  const handleOver = (rating) => {
    console.log(rating)
    setRating(rating);
  };

  const handleOut = () => {
    setRating(tempRating);
  };

  const handleClick = (rating) => {
    setTempRating(rating);

    console.log('>>', rating)
  };

  for (let i = 0; i < 5; i++) {
    let star = 'star';

    if (rating >= i) {
      star += ' checked';
    }

    stars.push(
      <label
        className={star}
        key={i}
        onMouseOver={() => handleOver(i)}
        onMouseOut={handleOut}
        onClick={() => handleClick(i)}
      >
        ★
      </label>
    );
  }

  return (
    <div className="App">
      { stars }
    </div>
  );
}

export default App;
