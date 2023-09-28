import React from "react";

const TimeLine = ({ items, classes, rightside }) => {
  return (
    <>
      <section className={`flex justify-center ${classes}`}>
        <div className="w-full">
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative flex ${
                  rightside && "flex-row-reverse"
                } items-baseline gap-6`}
              >
                <div
                  className={
                    rightside
                      ? `${
                          item.id !== "1" &&
                          "before:absolute before:right-[5.5px] before:h-full before:w-[1px] before:bg-gray-400"
                        } `
                      : `${
                          item.id !== "1" &&
                          "before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400"
                        } `
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div className={`${rightside && "text-right"}`}>
                  <p className="text-sm font-semibold">
                    {item.start}
                    {item.end ? ` - ${item.end}` : ""}
                  </p>
                  <p className="mt-2 text-sm font-bold">{item.title}</p>
                  <p className="mt-2 text-sm mb-3">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TimeLine;
