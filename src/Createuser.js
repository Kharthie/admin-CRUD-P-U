import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Createuser() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      date: "",
      salary: "",
    },

    onSubmit: async (values) => {
      try {
        await fetch("https://61c5cbe4c003e70017b79917.mockapi.io/users", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        });
        navigate("/user");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
      </div>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <lable>Name</lable>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                required
              ></input>
            </div>
            <div className="col-lg-4">
              <lable>Position</lable>
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                required
                name="position"
                value={formik.values.position}
              ></input>
            </div>
            <div className="col-lg-4">
              <lable>Office</lable>
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                required
                name="office"
                value={formik.values.office}
              ></input>
            </div>
            <div className="col-lg-4">
              <lable>Age</lable>
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                required
                name="age"
                value={formik.values.age}
              ></input>
            </div>
            <div className="col-lg-4">
              <lable>Date</lable>
              <input
                type="date"
                className="form-control"
                onChange={formik.handleChange}
                required
                name="date"
                value={formik.values.date}
              ></input>
            </div>
            <div className="col-lg-4">
              <lable className="text-center">Salary</lable>
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                required
                name="salary"
                value={formik.values.salary}
              ></input>
            </div>
            <div className="col-lg-12 mt-3">
              <input type="submit" className="btn btn-primary"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Createuser;
