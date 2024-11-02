import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const MainLayout = () => {
  return (
    <div>
      {/* NavBAr */}
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-232px)] py-12">
        {/* Dynamic section */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
