import React from "react";
import Lottie from "react-lottie";
import lottie1 from "../assets/lottie1.json"; // Import your Lottie JSON file

const demoContent = [
  {
    heading: "Heading 1",
    text: "This is some descriptive text for the first row.",
  },
  {
    heading: "Heading 2",
    text: "This is some descriptive text for the second row.",
  },
  {
    heading: "Heading 3",
    text: "This is some descriptive text for the third row.",
  },
  {
    heading: "Heading 4",
    text: "This is some descriptive text for the fourth row.",
  },
  {
    heading: "Heading 5",
    text: "This is some descriptive text for the fifth row.",
  },
];

const defaultOptions = {
  loop: true, // Loop the animation
  autoplay: true, // Start playing automatically
  animationData: lottie1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Demo() {
  return (
    <div className="p-5" id="demo">
      <h4 className="text-6xl feature_heading relative text-center mb-5">
        <span className="z-10">Demo</span>
        <span className="w-25 z-4 bg-orange-400 absolute bottom-0 h-50"></span>
      </h4>

      {demoContent.map((item, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 grid-flow-row p-5 items-center"
        >
          {index % 2 === 0 ? (
            <>
              <div className="flex justify-center">
                <Lottie options={defaultOptions} height={300} width={300} />
              </div>
              <div className="text-sm text-justify lg:mt-0 md:mt-0 sm:mt-4 sm:ms-0 md:ms-0 ms-5 lg:ms-5 mt-4">
                <h5 className="text-lg font-bold">{item.heading}</h5>
                <p>{item.text}</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-sm text-justify lg:mb-0 md:mb-0 sm:mb-4 mb-4">
                <h5 className="text-lg font-bold">{item.heading}</h5>
                <p>{item.text}</p>
              </div>
              <div className="flex justify-center">
                <Lottie options={defaultOptions} height={300} width={300} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
