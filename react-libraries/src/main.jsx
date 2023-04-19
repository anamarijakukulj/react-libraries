import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import About from "./routes/about";
import Tours from "./routes/tours";
import Contact from "./routes/contact";
import Test from "./routes/test";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "tours/",
        element: <Tours />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "test/",
        element: <Test />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
