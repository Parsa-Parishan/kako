import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
