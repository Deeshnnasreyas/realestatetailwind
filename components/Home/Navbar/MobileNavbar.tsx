"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`transform  transition-all duration-500 fixed
       inset-0 z-[1000] bg-black opacity-70 w-full h-screen ${navOpen}`}
      ></div>
      {/* navLinks */}
      <div
        className={`${navOpen} flex flex-col fixed text-white items-center transform transition-all
         duration-500 justify-center bg-[#c1205e] h-full w-[80%] sm:w-[60%]
      space-y-6 z-[10000]`}
      >
        {navLinks.map((nav: any) => (
          <Link key={nav?.id} href={nav?.url}>
            <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white font-medium hover:text-yellow-300 text-white ">
              {nav?.label}{" "}
            </p>
          </Link>
        ))}
        {/* close button */}
        <CgClose
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"
          onClick={closeNav}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
