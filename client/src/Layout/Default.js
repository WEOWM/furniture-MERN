import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./Default.css";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";


const Default = () => {
  const TOKEN = localStorage.getItem("TOKEN");

  console.log(TOKEN);

  return (
    <div>
      <div >
        <Header/>
      </div>
      <div className="content">
        
        {TOKEN ? <Outlet /> : <Navigate to="/sign-up" />}
      </div>
    </div>
  );
};

export default Default;
