import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { motion } from "framer-motion";

import data from "../data/portfolio.json";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Dwayne Herzberg</title>
        <meta name="description" content={data.description} />
      </Head>
      <ThemeProvider enableSystem attribute="class">
        <NavBar />
        <AnimatePresence mode="wait">
          <div key={router.route}>
            <Component {...pageProps} />
          </div>
          <motion.footer
            className="text-sm text-bold mt-2 p-2 container mx-auto max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1>Made With ❤ by Dwayne Herzberg &bull; 2023-2024</h1>
            <p>Sorry for the design, I&apos;m not a front-end dev and never will be! 😅 I did my best, though!</p>
          </motion.footer>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
