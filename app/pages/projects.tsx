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
import { projects } from "../repo/projectSrc";
import { ProjectLinks } from "../components/ProjectLinks";
import { ProjectTags } from "../components/ProjectTags";

function Projects() {
  console.log(projects);
  return (
    <>
      <NavBar></NavBar>
      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>projects</h1>
        <div className="flex flex-wrap">
          {projects.map((project) => {
            return (
              <div className="w-[34rem] mx-2 py-3" key={project.title}>
                <div className="max-w-lg rounded-xl overflow-hidden shadow-md ">
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-med text-lg mb-2">
                        {project.title}
                      </div>
                      <div className="text-sm text-med">{project.date}</div>
                    </div>
                    <p className="text-med text-sm py-2 pb-5">{project.body}</p>
                    <div className="flex">
                      <p className="text-light text-sm">
                        <strong>Team members:</strong>
                      </p>
                      <p className="text-med text-sm  ml-2">{project.team}</p>
                    </div>
                    <div className="flex pb-2">
                      <p className="text-light text-sm">
                        <strong>As part of:</strong>
                      </p>
                      <p className="text-med text-sm ml-2">
                        {project.programs}
                      </p>
                    </div>
                    <ProjectLinks project={project}></ProjectLinks>
                  </div>
                  <ProjectTags project={project}></ProjectTags>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
