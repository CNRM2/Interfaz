import React from 'react'
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './routes/App';
import Registro from './routes/registro'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "App/:Appid",
    element: <App />,
  },
  {
    path: "registro/:registroid",
    element: <Registro />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
