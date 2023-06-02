import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-64 bg-gray  rounded-3xl overflow-hidden">
      <div className="absolute p-6">
        <h1 className="relative text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight max-w-full max-h-full my-auto">
          I'm <span className="text-lime">Huba Ferencz</span>, a{" "}
          <span className="text-red">Front-end Engineer</span>
        </h1>
      </div>
      <Link
        href="https://www.linkedin.com/in/hubaferencz/"
        className="absolute bottom-6 right-6 bg-lime p-2 sm:p-3 md:p-4 rounded-xl text-gray font-bold text-lg sm:text-xl"
      >
        Hire me!
      </Link>
    </div>
  );
}
