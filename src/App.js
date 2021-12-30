import Dashboard from "./Dashboard";
import logo from "./logo.svg";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from "./Createuser";
import Useredit from "./Useredit";
import Userlist from "./Userlist";
import Createproduct from "./Createproduct";
import Productedit from "./Productedit";
import Productlist from "./Productlist";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/user" element={<Userlist />}>
                  {" "}
                </Route>
                <Route path="/users/Create" element={<Createuser />}>
                  {" "}
                </Route>
                <Route path="/edit/:id" element={<Useredit />}>
                  {" "}
                </Route>
                <Route path="/product" element={<Product />}>
                  {" "}
                </Route>
                <Route path="/products/Create" element={<Createproduct />}>
                  {" "}
                </Route>
                <Route path="/products/edit/:id" element={<Productedit />}>
                  {" "}
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
