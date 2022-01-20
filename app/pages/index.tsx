import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Socials } from "../components/Socials";
import { Intro } from "../components/Intro";
import { List } from "../components/List";
import { NavBar } from "../components/Navbar";
import { CalendlyLink } from "../components/CalendlyLink";
import Guestbook from "../components/LegacyLink";
import { Link, animateScroll as scroll } from "react-scroll";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <NavBar></NavBar>

        <div className="container mx-auto px-12 py-12 h-screen bg-white">
          <div className="flex py-6 items-center">
            <Image src="/portrait.png" width={50} height={50} />
            <h1 className=" px-3 text-3xl font-bold text-med">
              {"Hi! I'm Daniela."}
            </h1>
          </div>
          <Intro></Intro>
          <div>
            <CalendlyLink></CalendlyLink>
          </div>
          <div>
            <button className="w-fit">
              <Link
                activeClass="active"
                to="guestbook"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-md text-med hover:text-blue hover:underline">
                  📝 Sign my guestbook (on the blockchain)!
                </p>
              </Link>
            </button>
          </div>
          <Socials></Socials>
          <List></List>
          <section id="guestbook">
            <Guestbook></Guestbook>
          </section>
          <div className="h-20"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
