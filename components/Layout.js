import React from "react";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <Nav />
      <main>{children}</main>
      <footer className="bg-slate-900 text-gray-200 p-10 mt-auto">
        MarestellaCode©2022
      </footer>
    </div>
  );
}
