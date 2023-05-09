import Link from "next/link";
import Image from "next/image";
export default function NavMenu() {
  return (
    <div className="flex flex-col items-center h-screen shadow-xl bg-zinc-800">
      {/* <Image src="logo.png" /> */}
      <img src="logo.png" className="w-24 p-4" />
      <span className="text-center text-5xl text-primary font-bold p-4">Izac</span>
      <nav className="flex flex-col h-full justify-center">
        <Link href="/projects" className="p-4  hover:text-primary transition-all duration-200">
          Projects
        </Link>
        <Link href="/projects" className="p-4  hover:text-primary transition-all duration-200">
          Skills
        </Link>
        <Link href="/projects" className="p-4  hover:text-primary transition-all duration-200">
          About
        </Link>
        <Link href="/projects" className="p-4  hover:text-primary transition-all duration-200">
          Contact
        </Link>
      </nav>
    </div>
  );
}
