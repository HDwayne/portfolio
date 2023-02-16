import Link from "next/link";
import { motion } from "framer-motion";
import matter from "gray-matter";
import md from "markdown-it";
import fs from "fs";

import data from "../data/portfolio.json";
import Button from "@/components/Button";

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
              ease: [0.4, 0.0, 0.2, 1],
            },
          },
          exit: {
            transform: "translateY(100vh)",
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
            },
          },
        }}
        className="bg-white dark:bg-dark-grey w-full"
      >
        <nav className="sticky p-2 mb-5 top-0 w-full z-50 bg-white dark:bg-dark-grey flex flex-row justify-between">
          <Link href="/">
            <Button>
              <svg
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:fill-white"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
              </svg>
              back
            </Button>
          </Link>
          <Link href={dataJson.github} target="_blank">
            <Button>
              git repository
              <svg
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:fill-white"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </Button>
          </Link>
        </nav>

        <div className="w-3/4 mx-auto max-w-none prose prose-lg dark:prose-invert">
          <h1>{dataJson.title}</h1>
          <p className="text-justify">{dataJson.description}</p>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>
      </motion.div>
    </>
  );
}
