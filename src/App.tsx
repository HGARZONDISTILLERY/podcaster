import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './components/routes/root/root'
import ErrorPage from './components/routes/error/error'
import Contact from './components/routes/details/details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
