import './App.css';
import Home from './Components/home/Home';
import Login from './Components/login/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import Reservation from './Components/Reservation/Reservation';
import { Toaster } from "react-hot-toast";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/registration",
      element: <Registration></Registration>,
    },
    {
      path: "/reservation",
      element: <Reservation></Reservation>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
