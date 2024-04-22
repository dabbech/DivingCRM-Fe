import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <ul>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/model">Models</Link>
        </li>
        <li>
          <Link href="/Class">Class</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
