import { NextPage } from "next";
import Script from "next/script";
import { NavBar } from "./components/Navbar";

const Writings: NextPage = () => {
  return (
    <>
      <Script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></Script>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1 className=" px-3 text-3xl font-bold text-med">writings</h1>
      </div>
    </>
  );
};

export default Writings;
