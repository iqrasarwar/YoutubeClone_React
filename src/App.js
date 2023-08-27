import React from "react";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Video/:url",
    element: <Video />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
