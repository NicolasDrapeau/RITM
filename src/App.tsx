import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import { NewRace } from './racePages/NewRace';
import { RaceDetail } from './racePages/RaceDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RaceDetail/>,
  },
  {
    path: "/addRace",
    element: <NewRace/>,
  },
]);

const App = () =>(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
  
  );

export default App;
