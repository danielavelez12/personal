import type { NextPage } from "next";
import { Intro } from "../components/Intro";
import { List } from "../components/List";
import { NavBar } from "../components/Navbar";
import { Socials } from "../components/Socials";

const Home: NextPage = () => {
  return (
    <>
      <div className="page-shell h-screen flex flex-col">
        <NavBar></NavBar>

        <div className="container mx-auto px-12 py-5 flex flex-col flex-1 min-h-0 page-top">
          <div className="page-sheet flex flex-col flex-1 min-h-0">
            <div
              data-main-scroll
              className="flex flex-col gap-10 flex-1 min-h-0 overflow-y-auto pb-4"
            >
            <div className="flex flex-col gap-2">
              <h1 className="py-0 text-3xl text-med">{"Hi! I'm Daniela."}</h1>
              <p className="py-0 font-mono text-sm text-light">
                Curious and mission-driven engineer based in São Paulo and NYC.
              </p>
            </div>
            <Intro></Intro>
            <div className="font-mono text-sm text-med">
              ✉️ Email me at danielavelez1201 at gmail dot com.
            </div>
            <Socials></Socials>
            <List></List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
