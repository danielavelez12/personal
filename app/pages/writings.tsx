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

const writingsDirectory = path.join(process.cwd(), "writings");

function getPreview(content) {
  const endOfHeader = content.indexOf("</h2>");
  return endOfHeader === -1
    ? content.substring(0, 500) + "..."
    : content.substring(endOfHeader, endOfHeader + 500) + "...";
}

function Writings({ writings }) {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>writings</h1>
        <ul>
          {writings.map((writing) => (
            <li
              key={writing.title}
              className="list-none divide-y-2 py-2 divide-zinc200"
            >
              <Link href={`/writings/${encodeURIComponent(writing.title)}`}>
                <div>
                  <h2 className="text-xl text-med hover:bg-zinc200 border-l-2">
                    {writing.title}
                  </h2>
                  <div
                    className="text-sm text-med"
                    dangerouslySetInnerHTML={{
                      __html: getPreview(writing.content),
                    }}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="text-md"
          dangerouslySetInnerHTML={{ __html: writings["Sample"] }}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const writings = [];

  const titles = [];
  const filenames = fs.readdirSync(writingsDirectory);
  for (const filename of filenames) {
    const title = filename.replace(/\.md$/, "");
    titles.push(title);
  }

  for (const title of titles) {
    const fullPath = path.join(writingsDirectory, title + `.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    writings.push({ title: title, content: processedContent.toString() });
  }

  return {
    props: {
      writings: writings,
    },
  };
}

export default Writings;
