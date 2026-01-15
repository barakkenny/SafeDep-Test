import Nav from "./components/Nav";
import Hero from "./components/Hero"

export default function Home() {

  return (
    <div className="bg-light-200 min-h-screen px-24 py-6">
      <Nav />
      <div className="">
      <Hero />
      </div>
    </div>
  );
}
