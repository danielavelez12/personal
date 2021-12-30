import { NextPage } from "next";
import Script from "next/script";
import path from "path";
import { NavBar } from "../components/Navbar";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { experiences } from "../repo/experienceSrc";

function Experience() {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white text-med">
        <h1>experience</h1>
        <ul>
          {experiences.map((experience) => {
            return (
              <li
                key={experience.company}
                className="list-none border-t-2 border-t-zinc200 py-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3>{experience.company}</h3>
                    {/* <div className="align-center items-center mx-3 h-fit border-2 border-zinc200 rounded-3xl">
                      <p className="text-xs text-med px-3">{experience.role}</p>
                    </div> */}
                  </div>
                  <p className="">
                    <strong>{experience.dates}</strong>
                  </p>
                </div>
                <p className="text-sm  text-med py-0">
                  <strong>{experience.role}</strong>
                </p>
                <ul className="py-4">
                  {experience.description.map((item) => {
                    return <li key={item}> {item} </li>;
                  })}
                </ul>
                <p className="italic text-med">{experience.thanks}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Experience;
