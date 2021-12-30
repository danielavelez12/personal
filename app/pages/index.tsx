import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Socials } from "../components/Socials";
import { Intro } from "../components/Intro";
import { List } from "../components/List";
import { NavBar } from "../components/Navbar";
import { CalendlyLink } from "../components/CalendlyLink";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <NavBar></NavBar>

        <div className="container mx-auto px-12 py-5 h-screen bg-white">
          <div className="flex py-6 items-end">
            <Image src="/portrait.png" width={50} height={50} />
            <h1 className=" px-3 text-3xl font-bold text-med">
              {"Hi! I'm Daniela."}
            </h1>
          </div>
          <Intro></Intro>
          <CalendlyLink></CalendlyLink>
          <Socials></Socials>
          <List></List>
        </div>
      </div>
    </>
  );
};

export default Home;
