import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <main className="flex">
      <NavMenu />
      <div className="flex flex-col justify-center items-center w-full h-screen p-4">
        <span className="text-8xl">Hello, World!</span>
        <span className="text-8xl">
          I'm <span className="text-primary">Izac</span>
        </span>
        <p className="text-xl">Web developer</p>

        <button class="border border-primary text-primary p-4 m-4">See my work</button>
      </div>
    </main>
  );
}
