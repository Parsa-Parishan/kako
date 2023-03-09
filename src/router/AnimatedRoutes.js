import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Chat from "../pages/Chat";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/kako" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
