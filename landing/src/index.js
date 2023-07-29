import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>hello world</div>,
    children: [
      {
        path: "home",
        element: <Home />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
