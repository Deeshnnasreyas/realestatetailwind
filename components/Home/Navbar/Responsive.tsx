"use client";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import Nav from "./Nav";

const Responsive = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler} />

      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default Responsive;
