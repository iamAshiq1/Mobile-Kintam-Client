import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://mobile-kintam.herokuapp.com/Products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added SuccessFully");
          reset();
        }
      });
  };
  return (
    <div className="my-5">
      <h4 className="pt-4 fw-bold"> Add a New Product</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-3 w-50 rounded"
          {...register("img", { required: true })}
          placeholder="Image URL (500px X 500px)"
        />{" "}
        <br />
        <input className="my-2 w-50 rounded" {...register("name")} placeholder="Name" />
        <br />
        <input
          type='text'
          className="mt-3 w-50 rounded"
          placeholder="$ Price"
          {...register("price")}
        />
        <br />
        <textarea
          className="mt-4 w-50 rounded"
          rows="4"
          placeholder="Full Description"
          {...register("description")}
        />
        <br />
        <br />
        <input
          className="btn btn-outline-primary"
          value="Submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
