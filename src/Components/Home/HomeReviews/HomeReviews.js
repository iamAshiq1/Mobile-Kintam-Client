import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bounce from 'react-reveal/Bounce';

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mobile-kintam.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="row justify-content-between my-5 mx-2">
      <h2 style={{color: "#262339"}} className="fw-bold mt-5">
            Top Reviews
            </h2>
            <hr />
      {reviews.slice(0, 4).map((review) => (
        <Bounce bottom>
        <div className="col-lg-6 mb-4" key={review._id}>
        <div className="row align-items-center">
          <div className="col-lg-2 col-4">
            <img width='60%' className="rounded-circle" src={review?.img} alt="" />
          </div>
          <div className="col-lg-9 col-8" style={{textAlign: 'left'}}>
            <h6 className="fw-bold mt-2">{review?.name}</h6>
            <Rating size="small" value={ parseInt(review?.rating) } />
            <p style={{ color: "#A7A9AB" }}>{review?.description}</p>
          </div>
        </div>
      </div>
      </Bounce>
      ))}
    </div>
  );
};

export default HomeReviews;
