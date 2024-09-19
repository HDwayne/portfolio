import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import WorkCard from "@/components/WorkCard";
import WavingHand from "@/components/WavingHand";

import data from "../data/portfolio.json";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <section className="grid gap-5 tablet:mt-14 tablet:grid-cols-2">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl m-2 p-5 elevation-5dp dark:bg-dark-primary text-center flex flex-col tablet:order-last laptop:justify-between laptop:text-left laptop:flex-row-reverse"
          >
            <Image
              className="rounded-full w-56 h-56 self-center text-center m-auto"
              src="/images/profil.jpg"
              alt="Avatar"
              width={224}
              height={224}
              priority
            />
            <div className="w-full self-center laptop:mr-2">
              <h1 className="text-3xl font-bold my-2">
                Hi <WavingHand /> !
              </h1>
              <p className="text-xl leading-8 font-normal my-2">
                I&apos;m Dwayne,
                a final-year master's student in embedded systems !
              </p>
              <Link href="/about" className="mr-1">
                <button className="my-2 bg-transparent font-semibold py-2 px-4 border border-black text-black hover:text-white hover:bg-black dark:border-dark-teal dark:text-dark-teal dark:hover:text-white dark:hover:bg-dark-teal rounded-2xl">
                  More about me
                </button>
              </Link>
              <Link
                href="/CV_Herzberg_Dwayne.pdf"
                target="_blank"
                className="ml-1"
              >
                <button className="my-2 bg-transparent font-semibold py-2 px-4 border border-black text-black hover:text-white hover:bg-black dark:border-dark-teal dark:text-dark-teal dark:hover:text-white dark:hover:bg-dark-teal rounded-2xl">
                  My resume
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-2"
          >
            <h1 className="text-3xl font-bold">What's Up?</h1>
            <p className="mt-5 text-xl leading-8 font-normal opacity-70">
              “ {data.project_upcoming.description} ”
            </p>
            <p className="mt-2">{data.project_upcoming.partner}</p>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-2 mt-14"
        >
          <h1 className="text-3xl font-bold">Some of my projects</h1>
          <ul>
            {data.projects.map((project, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: (i) => ({
                    opacity: 0,
                    y: -25 * i,
                  }),
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    Transition: {
                      duration: 0.5,
                      delay: i * 0.025,
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  key={project.title.replace(/\s+/g, "-").toLowerCase()}
                  href={`${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <WorkCard
                    key={project.id}
                    title={project.title}
                    type={project.type}
                    description={project.description}
                    year={project.year}
                    technologies={project.technologies}
                    img={project.imageSrc}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>
    </>
  );
}
