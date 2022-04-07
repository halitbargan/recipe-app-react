import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
     
    </BrowserRouter>
  );
};

export default AppRouter;
