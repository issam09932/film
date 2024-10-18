import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App.js";
import Explore from "./pages/Explore.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login.js";
import Signin from "./pages/Signin.js";
import Add from "./pages/Add.js";
import Trailer from "./pages/Trailer.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/Explore",
    element:<Explore />
  },
  {
    path:"/Login",
    element:<Login />
  },
  {
    path:"/Signin",
    element:<Signin />
  },
  {
    path:"/Add",
    element:<Add />
  },
  
{
  path:"/Trailer",
  element:<Trailer />
},
{
  path:"/Login/Signin",
  element:<Signin />
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
