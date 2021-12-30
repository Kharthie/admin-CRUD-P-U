import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      ProductName: "",
      ModelName: "",
      Color: "",
      Type: "",
      Size: "",
    },
    onSubmit: async (values) => {
      try {
        await fetch("https://61c5cbe4c003e70017b79917.mockapi.io/products", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        });
        navigate("/product");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Product list</h1>
      </div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <lable>Product Name</lable>
              <input
                type="text"
                className="form-control"
                name="productName"
                onChange={formik.handleChange}
                value={formik.values.Productname}
                required
              ></input>
            </div>
            <div className="col-lg-6">
              <lable>Model Name</lable>
              <input
                type="text"
                className="form-control"
                name="modelName"
                onChange={formik.handleChange}
                value={formik.values.Modelname}
                required
              ></input>
            </div>
            <div className="col-lg-3">
              <lable>Color</lable>
              <input
                type="text"
                className="form-control"
                name="color"
                onChange={formik.handleChange}
                value={formik.values.color}
                required
              ></input>
            </div>
            <div className="col-lg-6">
              <lable>Type</lable>
              <input
                type="text"
                className="form-control"
                name="type"
                onChange={formik.handleChange}
                value={formik.values.type}
                required
              ></input>
            </div>
            <div className="col-lg-3">
              <lable>Size</lable>
              <input
                type="number"
                className="form-control"
                name="size"
                onChange={formik.handleChange}
                value={formik.values.size}
                required
              ></input>
            </div>
            <div className="col-lg-4">
              <input type="submit" className="btn btn-danger mt-3"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
