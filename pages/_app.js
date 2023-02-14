import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
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
