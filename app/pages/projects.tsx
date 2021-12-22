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
import { projects } from "./projectSrc";

function Projects() {
  console.log(projects);
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>projects</h1>
        <ul>
          {projects.map((project) => {
            return (
              <li className="list-none py-3" key={project.title}>
                <div className="max-w-lg rounded overflow-hidden shadow-md ">
                  <div className="px-6 py-4">
                    <div className="font-bold text-med text-lg mb-2">
                      {project.title}
                    </div>
                    <p className="text-med text-sm">{project.body}</p>
                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
                  {"tags" in project &&
                    project.tags.map((tag) => {
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                      </span>;
                    })}
                </div> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Projects;
