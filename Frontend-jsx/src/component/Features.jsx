import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Extended = () => {
  return (
    <div className="bg-white mt-20">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Working Principle"
        heading="How does it Work?"
      >
        <ExampleContent />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Oops...missed some features..."
        heading="Some more Principles"
      >
        <ExampleContent2 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      We have user levels for preventing unwanted spams
    </h2>
    <div className="col-span-1 md:col-span-8">
      <ul className="mb-10 list-disc list-inside text-xl text-neutral-600 md:text-2xl">
        <li>
          <strong>User Levels and Progression:</strong> New users start at Level
          1 and can progress up to Level 100 by earning points through
          activities like posting content, attending study sessions, and
          completing tasks. The points required for each level increase as users
          advance, encouraging continuous engagement.
        </li>
        <li>
          <strong>Token-Based Connections:</strong> ColabCube uses a unique
          token system where users can connect with others based on their level.
          Tokens are deducted for each connection, with higher-level connections
          costing more tokens. Users receive a monthly token balance, making it
          easier to expand their network and build professional relationships.
        </li>
        <li>
          <strong>Integrated Tools:</strong> The platform includes multiple
          tools, such as task management, meetings, and social networking, all
          accessible within ColabCube. Through seamless integrations with
          external applications, users can join meetings, manage tasks, and
          access resources directly from the platform.
        </li>
        <li>
          <strong>AI Assistant:</strong> ColabCube's AI-powered virtual
          assistant helps users with various tasks, such as finding information,
          managing schedules, and staying productive. This AI agent, integrated
          with the user’s workspace, offers smart suggestions, reminders, and
          guidance to enhance user productivity.
        </li>
      </ul>
      <button className="rounded-2xl border-2 mt-20 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Learn More
      </button>
    </div>
  </div>
);
const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      We are progressing into Web3
    </h2>
    <div className="col-span-1 md:col-span-8">
      <ul className="mb-4 list-disc list-inside text-xl text-neutral-600 md:text-2xl">
        <li>
          <strong>AI Assistant:</strong> ColabCube's AI-powered virtual
          assistant helps users with various tasks, such as finding information,
          managing schedules, and staying productive. This AI agent, integrated
          with the user’s workspace, offers smart suggestions, reminders, and
          guidance to enhance user productivity.
        </li>
        <li>
          <strong>Blockchain Security and Payments:</strong> ColabCube uses
          blockchain technology to manage memberships and payments. This
          approach ensures secure transactions, transparent processes, and the
          ability to introduce unique features like NFTs and token-based
          incentives.
        </li>
        <li>
          <strong>Gamified Engagement and Rewards:</strong> ColabCube motivates
          users through gamified experiences, offering rewards and badges for
          reaching milestones. This gamification keeps the work environment
          dynamic and encourages users to achieve more and interact with others
          in the community.
        </li>
      </ul>
      <button className="rounded-2xl border-2 mt-20 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Learn More
      </button>
    </div>
  </div>
);
