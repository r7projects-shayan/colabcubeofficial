import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./component/Landing_Page/Navbar";
import Home from "./component/HomeMain";
import { CustomKanban } from "./component/Kanban";
import { TokenPage } from "./component/tokencomponents/tokenpage";
import Users from "./component/Users";
import Events from "./component/Events";
import EventDetails from "./component/EventDetails";
import Systemlogs from "./component/Systemlogs";

function RedirectToExternal({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
}

function App() {
  return (
    <div className="mainapp">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/home"
          element={
            <SignedIn>
              <Home />
            </SignedIn>
          }
        />
        <Route
          path="/users"
          element={
            <SignedIn>
              <Users />
            </SignedIn>
          }
        />
        <Route
          path="/tasks"
          element={
            <SignedIn>
              <CustomKanban />
            </SignedIn>
          }
        />
        <Route
          path="/events"
          element={
            <SignedIn>
              <Events />
            </SignedIn>
          }
        />

        <Route
          path="/systemlogs"
          element={
            <SignedIn>
              <Systemlogs />
            </SignedIn>
          }
        />
        <Route
          path="/events/:id"
          element={
            <SignedIn>
              <EventDetails />
            </SignedIn>
          }
        />
        <Route
          path="/notes"
          element={
            <SignedIn>
              <RedirectToExternal url="https://colabcubenotes.vercel.app" />
            </SignedIn>
          }
        />
        <Route
          path="/meetings"
          element={
            <SignedIn>
              <RedirectToExternal url="https://colabcubemeetings.vercel.app" />
            </SignedIn>
          }
        />
        <Route
          path="/virtualai"
          element={
            <SignedIn>
              <RedirectToExternal url="https://colabcube.streamlit.app/" />
            </SignedIn>
          }
        />
        <Route
          path="/masabot"
          element={
            <SignedIn>
              <RedirectToExternal url="https://twitter-trend.streamlit.app/" />
            </SignedIn>
          }
        />
        <Route
          path="/social"
          element={
            <SignedIn>
              <RedirectToExternal url="https://colabcubesocial.vercel.app" />
            </SignedIn>
          }
        />
        <Route
          path="/tokens"
          element={
            <SignedIn>
              <TokenPage />
            </SignedIn>
          }
        />

        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
