import { NextPage } from "next";
import Script from "next/script";
import path from "path";
import { NavBar } from "./components/Navbar";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const writingsDirectory = path.join(process.cwd(), "writings");

function Writings({ writings }) {
  console.log(writings);
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1 className=" px-3 text-3xl font-bold text-med">writings</h1>
        <div
          className="text-md"
          dangerouslySetInnerHTML={{ __html: writings }}
        />
        <ul>
            <li>hi</li>
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fullPath = path.join(writingsDirectory, `sample.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const writings = processedContent.toString();

  return {
    props: {
      writings,
    },
  };
}

export default Writings;
