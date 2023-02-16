import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Head from "next/head";

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
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
