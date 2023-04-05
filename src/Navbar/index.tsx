import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Torodan from '../../public/img/torodanlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-clr4 absolute z-50 w-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 font-avenirheavy">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <Image src={Torodan} alt="logo" width={150} height={50}></Image>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" legacyBehavior>
                <a className="text-clr2 hover:bg-clr1 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="text-clr2 hover:bg-clr1 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Sobre
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-clr2 hover:bg-clr1 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Fale Conosco
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-clr1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" legacyBehavior>
            <a
              className="text-clr2 hover:bg-clr1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleNavbar}
            >
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              className="text-clr2 hover:bg-clr1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleNavbar}
            >
              Sobre
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className="text-clr2 hover:bg-clr1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleNavbar}
            >
              Fale Conosco
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
