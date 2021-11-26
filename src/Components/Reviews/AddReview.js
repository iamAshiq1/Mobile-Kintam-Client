import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth"
import Fade from 'react-reveal/Fade';

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth()
  
  const onSubmit = (data) => {
    data.name = user?.displayName;
    data.img = user.photoURL? user.photoURL  : " ";

      fetch("https://mobile-kintam.herokuapp.com/Reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Review submited");
          reset();
        }
      });
  };
  return (
    <div className="mt-5">
      <h4 className="fw-bold">Submit a Review</h4>
      <Fade top>
      <p>Share your thoughts with other customers by submitting a customer review. You can submit product feedback.</p>
      </Fade>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fade bottom>
        <textarea
          className="w-100"
          rows="5"
          maxLength='200'
          required
          placeholder="Write something in 200 characters...."
          {...register("description")}
        />
        </Fade>
        <br />
        <br />
        <Fade bottom>
        <input
          className="w-75"
          type='number'
          required
          placeholder="Add a Rating between (0-5)"
          {...register("rating")}
        />
        </Fade>
        <br />
        <br />
        <Fade bottom>
        <input
          className="btn btn-outline-primary"
          value="Submit"
          type="submit"
        />
        </Fade>
      </form>
    </div>
  );
};

export default AddReview;
