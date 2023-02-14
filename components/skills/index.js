import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = ({ title, items }) => {
  return (
    <>
      <div className="border mt-5 border-gray-400 rounded-lg dark:bg-dark-primary dark:border-transparent elevation-3dp">
        <div className="m-3">
          <h2 className="text-lg mb-2">{title}</h2>
          <div className="flex flex-row">
            {items.map((item) => (
              <motion.div
                key={item}
                className="ml-1"
                whileHover={{ scale: 1.2 }}
              >
                <Image
                  src={`/icons/${item}.png`}
                  width={32}
                  height={32}
                  alt={item}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
