import { NextPage } from "next";
import Script from "next/script";
import path from "path";
import { NavBar } from "../../components/Navbar";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const titles = ["Sample"];
const writingsDirectory = path.join(process.cwd(), "writings");

function Writings({ content, title }) {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>{title}</h1>

        <div
          className="text-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="py-20 flex justify-center">. . . </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const fullPath = path.join(writingsDirectory, context.params.title + `.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    props: {
      content: processedContent.toString(),
      title: context.params.title,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  const filenames = fs.readdirSync(writingsDirectory);
  for (const filename of filenames) {
    const title = filename.replace(/\.md$/, "");
    paths.push({ params: { title: title } });
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export default Writings;
