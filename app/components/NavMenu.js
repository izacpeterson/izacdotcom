"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
export default function NavMenu() {
  const pathname = usePathname();
  const linkList = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/skills", text: "Skills" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="fixed w-full top-0 left-0 flex justify-between px-4 py-3 bg-zinc-800 lg:hidden">
        <div className="flex items-center">
          <img src="logo.png" className="w-12" />
          <h1 className="text-5xl pl-2">Izac</h1>
        </div>
        <button className=" text-white text-2xl lg:hidden" onClick={toggleDrawer}>
          <FaBars />
        </button>
      </div>
      {/* Drawer container */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-zinc-900 z-40 transform transition-transform ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-800">
          <h1 className="text-lg font-bold text-white">Navigation</h1>
          <button className="text-white hover:text-gray-400" onClick={toggleDrawer}>
            Close
          </button>
        </div>

        {/* Drawer linkList */}
        <ul className="py-4">
          {linkList.map((link) => (
            <li key={link.text} className="px-4 py-2">
              <Link href={link.href} key={link.href} onClick={toggleDrawer} className={`p-4 hover:text-primary transition-all duration-300 ${pathname === link.href ? "text-primary" : ""}`}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-screen h-screen bg-black opacity-90 z-30`} onClick={toggleDrawer} />

      <div id="desktop" className="hidden lg:flex flex-col items-start h-full shadow-xl bg-zinc-800">
        <img src="logo.png" className="w-24 p-4" />
        <span className="text-center text-5xl  font-bold p-4">Izac</span>
        <nav className="flex flex-col h-full justify-start pt-10">
          {linkList.map((link) => (
            <Link href={link.href} key={link.href} className={`p-4 hover:text-primary transition-all duration-300 ${pathname === link.href ? "text-primary" : ""}`}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
