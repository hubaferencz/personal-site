import { name, occupation } from "../data";

export default function Hero() {
  return (
    <header className="relative h-52 lg:h-72 md:h-56 bg-gray rounded-3xl overflow-hidden">
      <div className="absolute p-4 xl:p-6">
        <h1 className="relative text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-semibold tracking-wide">
          <span className="text-lime">{name}</span> {occupation}
        </h1>
      </div>
    </header>
  );
}
