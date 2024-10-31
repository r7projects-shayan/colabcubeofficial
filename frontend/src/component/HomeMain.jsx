import React from "react";
import Hero from "./Hero";
import { Extended } from "./Features";
import { Features } from "./Landing_Page/features";
// import { VelocityText } from "./Scrolltext";
import { AboutTeam } from "./Landing_Page/about_team";

import { Near } from "./demo/Near";

import Choose from "./Choose";
import { Help } from "./Help";

import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* <VelocityText /> */}

      <Features />
      <Extended />
      <AboutTeam />
      <Near />
      <Choose />

      <ContactUs />
    </div>
  );
};

export default Home;
