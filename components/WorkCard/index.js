import Image from "next/image";
import { motion } from "framer-motion";

const WorkCard = ({ title, type, description, year, technologies, img }) => {
  return (
    <motion.article
      className="flex flex-col tablet:flex-row overflow-hidden elevation-3dp rounded-lg mt-4 dark:bg-dark-primary"
      whileHover={{ y: -3 }}
    >
      <Image
        className="inset-0 object-cover object-center w-full tablet:w-2/6"
        src={`/images/${img}`}
        alt="Image d'un projet"
        width={500}
        height={500}
      />
      <div className="py-4 px-6 flex flex-col justify-between tablet:w-4/6 ">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-lg leading-tight truncate">
            {title}
          </h3>
          <div className="flex flex-row">
            {technologies.map((item) => (
              <motion.div
                key={item}
                className="ml-1"
                whileHover={{ scale: 1.2 }}
              >
                <Image
                  src={`/icons/svg/${item}.svg`}
                  width={32}
                  height={32}
                  alt={item}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-justify">{description}</p>
        <p className="text-sm uppercase tracking-wide font-semibold mt-2">
          {type} &bull; {year}
        </p>
      </div>
    </motion.article>
  );
};

export default WorkCard;
