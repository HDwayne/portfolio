import Image from "next/image";
import { motion } from "framer-motion";

import TimeLine from "@/components/TimeLine";
import Skills from "@/components/skills";

import data from "../data/portfolio.json";

export default function Product() {
  return (
    <>
      <div className="container mx-auto max-w-7xl mb-4">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="m-2 md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/images/about_picture.webp"}
              width={3024}
              height={4032}
              quality={50}
              alt="about_picture"
              priority
            />
          </motion.div>

          <div className="md:w-1/2">
            <motion.p
              className="text-justify m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {data.mydescription}
            </motion.p>

            <motion.section
              className="m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-2xl font-bold mt-5">Education</h1>
              <TimeLine items={data.education} classes="mt-2" />
            </motion.section>

            <motion.section
              className="m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="text-2xl font-bold mt-5">Experience</h1>
              <TimeLine items={data.experiences} classes="mt-2" />
            </motion.section>
          </div>
        </div>

        <motion.section
          className="m-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-2xl font-bold mt-5">Skills</h1>
          <Skills title="Languages" items={data.skills.languages} />
          <Skills title="Tools" items={data.skills.tools} />
        </motion.section>
      </div>
    </>
  );
}
