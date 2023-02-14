import Link from "next/link";
import { motion } from "framer-motion";
import matter from "gray-matter";
import md from "markdown-it";
import fs from "fs";

import data from "../data/portfolio.json";

export async function getStaticPaths() {
  const projects = data.projects;

  const paths = projects.map((item) => ({
    params: { project: item.title.replace(/\s+/g, "-").toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { project } }) {
  const projects = data.projects;
  const index = projects.findIndex(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === project
  );
  const dataJson = projects[index];

  const fileName = fs.readFileSync(
    `data/projects/${dataJson.markdown}.md`,
    "utf-8"
  );
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      dataJson,
      frontmatter,
      content,
    },
  };
}

export default function Project({ dataJson, content }) {
  return (
    <>
      <motion.div
        initial="hidden"
        exit="exit"
        animate="show"
        variants={{
          hidden: {
            top: 0,
            left: 0,
            transform: "translateY(100vh)",
          },
          show: {
            transform: "translateY(0vh)",
            transition: {
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1]
            },
          },
          exit: {
            transform: "translateY(100vh)",
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1]
            },
          },
        }}
        className="bg-white dark:bg-dark-grey w-full"
      >
        <nav className="sticky p-2 mb-5 top-0 w-full z-50 bg-white dark:bg-dark-grey">
          <Link href="/" className="flex mx-auto max-w-7xl">
            <svg width="24" height="24" viewBox="0 0 16 16">
              <path
                d="M9 4 L5 8 L9 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span className="mx-2">Back</span>
          </Link>
        </nav>

        <div className="w-3/4 mx-auto max-w-none prose prose-lg dark:prose-invert">
          <h1>{dataJson.title}</h1>
          <p>{dataJson.description}</p>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </motion.div>
    </>
  );
}
