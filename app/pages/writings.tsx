import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { NavBar } from "../components/Navbar";

const writingsDirectory = path.join(process.cwd(), "writings");

function getExcerpt(markdown) {
  const text = markdown
    .replace(/^#+\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__|\*|_|`)/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 280 ? text.slice(0, 280).trimEnd() + "\u2026" : text;
}

function Writings({ writings }) {
  return (
    <>
      <div className="page-shell h-screen flex flex-col">
        <NavBar></NavBar>
        <div className="container mx-auto px-12 py-5 flex flex-col flex-1 min-h-0 page-top">
          <div className="page-sheet flex flex-col flex-1 min-h-0">
            <div className="shrink-0">
              <h1>Writings</h1>
            </div>
          <ul
            data-main-scroll
            className="flex-1 min-h-0 overflow-y-auto border-t-2 border-t-zinc200"
          >
            <li key="harvard" className="list-none py-2">
              <a
                className="text-blue hover:underline"
                href="https://harvardtechnologyreview.com/2023/03/26/the-latam-fintech-revolution/"
                target="_blank"
                rel="noreferrer"
              >
                Harvard Technology Review: The LatAm Fintech Revolution
              </a>
            </li>
            <li key="substack" className="list-none py-2">
              <a
                className="text-blue hover:underline"
                href="https://substack.com/@danivelez?utm_source=user-menu"
                target="_blank"
                rel="noreferrer"
              >
                See more on my substack
              </a>
            </li>
            {writings.map((writing) => (
              <li
                key={writing.slug}
                className="list-none divide-y-2 py-2 divide-zinc200"
              >
                <Link href={`/writings/${encodeURIComponent(writing.slug)}`}>
                  <div className="cursor-pointer">
                    <h2 className="px-0 text-xl text-med hover:underline">
                      {writing.title}
                    </h2>
                    {writing.date && (
                      <div className="font-mono text-xs text-light">{writing.date}</div>
                    )}
                    <div className="text-sm text-med leading-relaxed">{writing.excerpt}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const writings = [];

  const filenames = fs
    .readdirSync(writingsDirectory)
    .filter((filename) => filename.endsWith(".md"));

  for (const filename of filenames) {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(writingsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    writings.push({
      slug: slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || null,
      excerpt: getExcerpt(matterResult.content),
    });
  }

  writings.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  return {
    props: {
      writings: writings,
    },
  };
}

export default Writings;
