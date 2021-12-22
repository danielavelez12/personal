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
import Image from "next/image";
import { projects } from "./projectSrc";

function Projects() {
  console.log(projects);
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white text-med">
        <h1>experience</h1>
        <p>
          <strong>Figma, Software Engineering Intern June-Aug 2021</strong>•
          Redesigned Figma signup and onboarding experiences with design for
          front-end, database, APIs, and state management • Implemented
          education admin and verification features, including banners,
          dashboard tips, and file permissions logic
        </p>
        <p>
          <strong>Facebook, Software Engineering Intern Jan-April 2021</strong>{" "}
          • Developed search experience with filters and data logging for
          employees to find relevant roles at Facebook for referrals •
          Implemented full-stack system for ML recommendations for positions
          based on uploaded resume on referral forms
        </p>
        <p>
          <strong>Microsoft, Software Engineering Intern May-Aug 2020 </strong>•
          Redesigned Azure Static Web Apps to be able to integrate into other
          low-code/no-code platforms and code editor extensions • Developed
          back-end infrastructure and APIs for app deployment and content
          distribution, cutting deployment time by up to 75%
        </p>
        <p>
          <strong>
            MIT CSAIL: Distributed Robotics Lab, Undergraduate Researcher
            March-June 2020
          </strong>{" "}
          • Developer fabric defect detection device with binary and siamese
          machine learning models, using Python and TensorFlow • Implemented ML
          explainability with visualization using a back-propagation algorithm
          to assist workers in textile manufacturing
        </p>
        <p>
          <strong>
            MIT Media Lab Research: CityMatrix Group, Undergraduate Researcher
            Jan-March 2020{" "}
          </strong>
          • Developed computer vision program for a smart home to assist in
          tasks or emergencies for elderly users, using Python and HTML •
          Implemented human body pose detection to track standing, sitting, or
          lying positions over time using OpenCV and heuristics
        </p>
      </div>
    </>
  );
}

export default Projects;
