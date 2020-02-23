import React from "react";
import { useTranslation } from "react-i18next";
import { fetchData, updateData, addData } from "../../../mixins/fetchData";

export default function Rating({ rate, userId, proId }) {
  const { t } = useTranslation();
  const [rating, setRating] = React.useState(Number);
  const [isRating, setIsRating] = React.useState(Boolean);
  const [tempRating, setTempRating] = React.useState(Number);
  let stars = [];
  let currentRating = rate;

  React.useEffect(() => {
    const fetchRating = async () => {
      const res = await fetchData("rating", { userId: userId, proId: proId });

      if (res) {
        setIsRating(true);
        setRating(res.rating);
        setTempRating(res.rating);
      } else {
        setRating(0);
        setTempRating(0);
      }
    };

    fetchRating();
  }, [proId, userId]);

  const handleOver = rating => {
    setRating(rating);
  };

  const handleOut = () => {
    setRating(tempRating);
  };

  const handleClick = async rating => {
    setTempRating(rating);

    const averageRating = Math.ceil((currentRating + rating) / 2);

    // rating
    updateData("products", { id: proId }, { rating: averageRating });

    if (isRating) {
      updateData(
        "rating",
        { userId: userId, proId: proId },
        { rating: rating }
      );
    } else {
      const data = {
        userId: userId,
        proId: proId,
        rating: rating
      };

      addData("rating", data);
    }
  };

  for (let i = 1; i < 6; i++) {
    let star = "star";

    if (rating >= i) {
      star += " checked";
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
    <>
      {stars} <span>{rating ? t("Your evaluate") : t("There are no reviews yet")}</span>
    </>
  );
}
