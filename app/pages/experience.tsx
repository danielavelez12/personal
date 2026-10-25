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
      <div className="page-shell h-screen flex flex-col text-med">
        <NavBar></NavBar>

        <div className="container mx-auto px-12 py-5 flex flex-col flex-1 min-h-0 page-top">
          <div className="page-sheet flex flex-col flex-1 min-h-0">
            <div className="shrink-0">
            <h1>Experience</h1>
          </div>
          <ul data-main-scroll className="flex-1 min-h-0 overflow-y-auto">
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
                            {experience.dates}
                        </p>
                    </div>
                    <p className="font-mono text-xs text-med py-0">
                        {experience.role}
                    </p>
                    <ul className="py-4 pl-5">
                        {experience.description.map((item) => {
                            return <li key={item}> {item} </li>;
                        })}
                    </ul>
                    {experience.link != '' ? (
                        <a
                            className="text-blue hover:underline wrap-anywhere"
                            href={experience.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {experience.link}
                        </a>
                    ) : (
                        <></>
                    )}
                    <p className="italic text-med">{experience.thanks}</p>
                </li>
            );
          })}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
