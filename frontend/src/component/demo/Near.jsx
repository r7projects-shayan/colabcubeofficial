import React from "react";
import Lottie from "lottie-react";
// Import your Lottie JSON files
import animationOne from "../../assets/lottie1.json";
import animationTwo from "../../assets/lottie2.json";
import animationThree from "../../assets/lottie1.json";
import animationFour from "../../assets/lottie4.json";
import animationFive from "../../assets/lottie2.json";

const demo = [
  {
    heading: "SEAMLESS PAYMENTS",
    text: [
      "Utilizes NEAR's blockchain for fast and secure transactions.",
      "Low-cost transactions to maximize user satisfaction.",
      "Smart contracts automate payment processes, enhancing transparency.",
      "Users retain control over their financial data.",
      "Immediate confirmations to improve user experience.",
      "Reduces operational costs for better pricing models.",
      "Supports a sustainable economic model for community growth.",
      "Enables cross-border transactions without high fees or delays.",
      "Utilizes sharding technology for scalability, allowing high transaction volumes.",
      "Incorporates advanced security features to mitigate fraud risks.",
      "Provides an intuitive user interface for seamless payment processing.",
      "Integrates with various wallets for user convenience and accessibility.",
      "Facilitates micropayments, making it suitable for diverse user needs.",
      "Offers detailed transaction histories for improved financial tracking.",
    ],

    lottie: animationOne,
  },
  {
    heading: "DECENTRALIZED GOVERNANCE",
    text: [
      "Empowers users to participate in key decisions via blockchain tokens.",
      "Ensures transparency in the voting process through smart contracts.",
      "Fosters a sense of ownership and trust among community members.",
      "Aligns platform growth with user interests for better engagement.",
      "Encourages loyalty and commitment from users.",
      "Reduces the risk of centralized control or bias.",
      "Promotes a more engaged and proactive community.",
    ],
    lottie: animationTwo,
  },
  {
    heading: "ADVANCED DATA ANALYTICS",
    text: [
      "Analyzes user interactions to identify engagement patterns.",
      "Utilizes Aurora network data for comprehensive insights.",
      "Facilitates data-driven decision-making for platform enhancements.",
      "Enhances adaptability to user needs based on real-time analytics.",
      "Allows for tailored experiences to meet changing expectations.",
      "Promotes continuous evaluation of user engagement strategies.",
      "Positions ColabCube as a leader in user-centric design.",
    ],
    lottie: animationThree,
  },
  {
    heading: "NFT-BASED COMMUNITY ENGAGEMENT",
    text: [
      "Introduces unique digital collectibles to boost engagement.",
      "Users earn and trade NFTs for participation and achievements.",
      "Incentivizes active involvement in community activities.",
      "Creates economic opportunities through NFT trading.",
      "Strengthens community ties and enhances user experience.",
      "Fosters a sense of belonging among users.",
      "Encourages ongoing participation through rewarding systems.",
    ],
    lottie: animationFour,
  },
  {
    heading: "ECO-FRIENDLY INFRASTRUCTURE",
    text: [
      "Utilizes NEAR's energy-efficient blockchain technology.",
      "Minimizes environmental impact through low energy consumption.",
      "Aligns transactions with eco-friendly practices.",
      "Enhances sustainability in operational models.",
      "Resonates with eco-conscious users valuing sustainability.",
      "Positions ColabCube as a leader in sustainable tech solutions.",
      "Encourages eco-friendly initiatives within the community.",
    ],
    lottie: animationFive,
  },
];

export function Near() {
  return (
    <div className="p-5" id="demo">
      <h4 className="d-flex justify-content-center text-6xl feature_heading relative">
        <span className="z-10">NEAR X COLABCUBE</span>
        <span className="w-25 z-4 bg-orange-400 absolute bottom-0 h-50"></span>
      </h4>

      {demo.map((item, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 grid-flow-row p-3 justify-items-center align-items-center"
        >
          {index % 2 === 0 ? (
            <>
              <div className="text-justify lg:mb-0 md:mb-0 sm:mb-4 mb-4 font-bold text-lg">
                <h3 className="text-5xl text-blue-600 mb-10 font-bold">
                  {item.heading}
                </h3>
                <ul className="list-disc pl-5">
                  {item.text.map((point, i) => (
                    <li key={i} className="text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Lottie animationData={item.lottie} width={315} height={315} />
            </>
          ) : (
            <>
              <Lottie animationData={item.lottie} width={315} height={315} />
              <div className="text-justify lg:mb-10 md:mb-0 sm:mb-4 mb-10 font-bold text-lg">
                <h3 className="text-5xl font-bold text-blue-600 mb-10">
                  {item.heading}
                </h3>
                <ul className="list-disc pl-5">
                  {item.text.map((point, i) => (
                    <li key={i} className="text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
