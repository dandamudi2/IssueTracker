"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "DashBoard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <div>
      <nav
        className="flex space-x-6 border-b
       mb-5 px-5 h-14 items-center"
      >
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-5">
          {links.map((link) => (
            <Link
              className={classNames({
                "text-blue-900  font-bold": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
