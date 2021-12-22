import Link from "next/link";
import { useState } from "react";

const navOptionClassName =
  "lg:inline-flex lg:w-auto w-full px-3 py-2 text-dark items-center justify-center hover:bg-zinc200 hover:text-black";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-3">
        <Link href="/">
          <a className="text-md text-med inline-flex items-center p-2 mr-4">
            Daniela Velez
          </a>
        </Link>
        <button
          onClick={handleClick}
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          {" "}
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className={navOptionClassName}>Home</a>
            </Link>
            <Link href="/writings">
              <a className={navOptionClassName}>Writings</a>
            </Link>
            <Link href="/projects">
              <a className={navOptionClassName}>Projects</a>
            </Link>
            <Link href="/experience">
              <a className={navOptionClassName}>Experience</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
