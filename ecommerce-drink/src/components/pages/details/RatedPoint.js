import React from "react";

export default function RatedPoint({ rating }) {
  let stars = [];

  for (let i = 1; i < 6; i++) {
    let star = 'star';

    if (rating >= i) {
      star += ' checked';
    }

    stars.push(
      <label
        className={star}
        key={i}
      >
        ★
      </label>
    );
  }

  return (
    <>
      {stars}
    </>
  )
}
