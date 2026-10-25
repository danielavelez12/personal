import { NextPage } from "next";
import Script from "next/script";
import path from "path";
import { NavBar } from "../../components/Navbar";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const writingsDirectory = path.join(process.cwd(), "writings");

function Writings({ content, title, date, source }) {
  return (
    <>
      <div className="page-shell h-screen flex flex-col">
        <NavBar></NavBar>

        <div className="container mx-auto px-12 py-5 flex flex-col flex-1 min-h-0 page-top">
          <div className="page-sheet flex flex-col flex-1 min-h-0">
            <div className="shrink-0">
              <h1 className="px-0">{title}</h1>
              {date && (
                <div className="font-mono text-xs text-light">{date}</div>
              )}
            </div>
            <div
              data-main-scroll
              className="flex-1 min-h-0 overflow-y-auto border-t-2 border-t-zinc200"
            >
              <div
                className="text-md post-body"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {source && (
                <div className="py-4 font-mono text-xs text-light">
                  Originally published on{" "}
                  <a
                    className="text-blue hover:underline"
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Substack
                  </a>
                  .
                </div>
              )}
            </div>
          </div>
        </div>
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
      title: matterResult.data.title || context.params.title,
      date: matterResult.data.date || null,
      source: matterResult.data.source || null,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  const filenames = fs
    .readdirSync(writingsDirectory)
    .filter((filename) => filename.endsWith(".md"));
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
