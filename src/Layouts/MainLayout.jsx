import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* NavBAr */}
      <div className="h-16">
        <NavBar></NavBar>
      </div>
      <div className="min-h-[calc(100vh-232px)] py-12 container md:px-12">
        {/* Dynamic section */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
