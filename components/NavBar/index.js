import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

import Button from "../Button";

// Local Data
import data from "../../data/portfolio.json";
import Socials from "../Socials";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {mounted && theme && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                        }`}
                      alt="Theme icon"
                      width={24}
                      height={24}
                    />
                  </Button>
                )}

                {mounted && theme && (
                  <Popover.Button>
                    <Image
                      className="h-5"
                      src={`/images/${
                        !open
                          ? theme === "dark"
                            ? "menu-white.svg"
                            : "menu.svg"
                          : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                        }`}
                      width={24}
                      height={24}
                      alt="Theme icon"
                    />
                  </Popover.Button>
                )}
              </div>
            </div>
            <Popover.Panel className="flex flex-row absolute right-0 z-10 w-11/12 p-4 dark:bg-slate-800 shadow-md rounded-md">
              <Button
                onClick={() => router.push("/about")}
                classes="first:ml-1"
              >
                About
              </Button>
              <Socials />
            </Popover.Panel>
          </>
        )}
      </Popover>

      <nav className="top-0 z-10">
        <div className="container mx-auto max-w-7xl hidden flex-row items-center justify-between tablet:flex">
          <h1
            onClick={() => router.push("/")}
            className="font-medium cursor-pointer p-2"
          >
            {name}.
          </h1>

          <div className="flex">
            <Button onClick={() => router.push("/about")}>About</Button>
            <Socials />
            {mounted && theme && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  width={24}
                  height={24}
                  alt="Theme icon"
                />
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
