import React from "react";
import { UserNav } from "./user-nav";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center container p-5">
      <h1>airbnb Logo</h1>
      <ul className="flex gap-x-6">
        <UserNav />
      </ul>
    </nav>
  );
}
