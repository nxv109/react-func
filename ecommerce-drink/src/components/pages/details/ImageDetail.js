import React, { useEffect, useState } from "react";
import ReactImageZoom from "react-image-zoom";

export default function ImageDetail({ photos }) {
  const [ imageIndex, setImageIndex ] = useState(Number);

  useEffect(() => {
    setImageIndex(0);
  }, []);

  const handleChangeImage = id => {
    setImageIndex(id);
  };

  if (photos === undefined) {
    return null;
  }

  const imageZoom = {
    width: 365,
    zoomWidth: 400,
    zoomLensStyle: "opacity: 0.4;background-color: gray;",
    zoomPosition: "right",
    img: `http://localhost:3000/images/${photos[imageIndex]}`
  };

  return (
    <div className="detail__pro-photos">
		 <div className="detail__list-photos">
			<div className="detail__ar-top">
			   <i className="fas fa-arrow-up" />
			</div>
			<div className="detail__ar-bottom">
			   <i className="fas fa-arrow-down" />
			</div>
			{photos.map((photo, index) => (
			   <div
				  key={index}
				  onClick={() => handleChangeImage(index)}
				  className="detail__photo"
			   >
				  <img src={`http://localhost:3000/images/${photo}`} alt={photo} />
			   </div>
			))}
		 </div>
		 <div className="detail__main-photo">
			<ReactImageZoom {...imageZoom} />
		 </div>
	  </div>
  );
}
