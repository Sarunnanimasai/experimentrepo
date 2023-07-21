import React from "react";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
