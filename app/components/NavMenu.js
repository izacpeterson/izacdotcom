"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function NavMenu() {
  const pathname = usePathname();

  const linkList = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/skills", text: "Skills" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <div className="flex flex-col items-center h-screen shadow-xl bg-zinc-800">
      {/* <Image src="logo.png" /> */}
      <img src="logo.png" className="w-24 p-4" />
      <span className="text-center text-5xl text-primary font-bold p-4">Izac</span>
      <nav className="flex flex-col h-full justify-center">
        {linkList.map((link) => (
          <Link href={link.href} key={link.href} className={`p-4 hover:text-primary transition-all duration-300 ${pathname === link.href ? "text-primary" : ""}`}>
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
