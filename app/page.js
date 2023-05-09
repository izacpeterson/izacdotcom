import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <span className="text-4xl lg:text-8xl">Hello, World!</span>
      <span className="text-6xl lg:text-8xl">
        I&apos;m <span className="text-primary">Izac</span>
      </span>
      <p className="text-xl">Web developer</p>

      <Link href="/projects" className="border border-primary text-primary p-4 m-4">
        See my work
      </Link>
    </div>
  );
}
