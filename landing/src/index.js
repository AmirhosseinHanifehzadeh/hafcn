import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// views
import Home from "./routes/home";
import Login from './routes/login';
import SignUp from './routes/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>hello world</div>,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup', 
    element: <SignUp />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
