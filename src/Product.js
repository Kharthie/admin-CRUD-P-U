import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    try {
      let data = await fetch(
        "https://61c5cbe4c003e70017b79917.mockapi.io/products"
      );
      let userData = await data.json();
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  let final = async (id) => {
    let move = await fetch(
      `https://61c5cbe4c003e70017b79917.mockapi.io/products/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await fetch("https://61c5cbe4c003e70017b79917.mockapi.io/");
    let userData = await data.json();
    setUsers(userData);
  };
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Productlist</h1>
        <Link
          to="/products/Create"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create list
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Model Name</th>
                  <th>Color</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {users.map((procduct, index) => {
                  // index is just uniqe value seperateed,only for map method this place use or not use no problem
                  return (
                    <tr key={index}>
                      <td>{procduct.productName}</td>
                      <td>{procduct.modelName}</td>
                      <td>{procduct.color}</td>
                      <td>{procduct.type}</td>
                      <td>{procduct.size}</td>
                      <td>
                        <Link to={`/Products/edit/${procduct.id}`}>
                          {" "}
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => final(procduct.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

