import { NextPage } from "next";
import Script from "next/script";
import path from "path";
import { NavBar } from "./components/Navbar";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Router from "next/router";
import Link from "next/link";

function Projects() {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>projects</h1>
        <ul></ul>
      </div>
    </>
  );
}

export default Projects;
