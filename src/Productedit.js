import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

function Productedit() {
  let params = useParams();
  let navigate = useNavigate(); //this line use for delete the value,again reload
  const formik = useFormik({
    initialValues: {
      productName: "",
      modelName: "",
      Color: "",
      type: "",
      size: "",
    },
    onSubmit: async (values) => {
      try {
        await fetch(
          `https://61c5cbe4c003e70017b79917.mockapi.io/products/${params.id}`,
          {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        navigate("/products"); //this line use for delete the value,again reload
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(async () => {
    try {
      let load = await fetch(
        `https://61c5cbe4c003e70017b79917.mockapi.io/products/${params.id}`
      );
      let userLoad = await load.json();
      formik.setValues(userLoad);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
                name="national"
                onChange={formik.handleChange}
                value={formik.values.national}
                required
              ></input>
            </div>
            <div className="col-lg-6">
              <lable>modelName</lable>
              <input
                type="text"
                className="form-control"
                name="productName"
                onChange={formik.handleChange}
                value={formik.values.productName}
                required
              ></input>
            </div>
            <div className="col-lg-3">
              <lable>Color</lable>
              <input
                type="text"
                className="form-control"
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                required
              ></input>
            </div>
            <div className="col-lg-6">
              <lable>type</lable>
              <input
                type="text"
                className="form-control"
                name="millage"
                onChange={formik.handleChange}
                value={formik.values.millage}
                required
              ></input>
            </div>
            <div className="col-lg-3">
              <lable>size</lable>
              <input
                type="text"
                className="form-control"
                name="productcc"
                onChange={formik.handleChange}
                value={formik.values.productcc}
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

export default Productedit;
