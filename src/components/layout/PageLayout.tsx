import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-wallpaper-darkest flex flex-col justify-stretch items-center pt-16">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
