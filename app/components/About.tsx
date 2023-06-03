import { about } from "../data";
export default function About() {
  return (
    <section className="w-full lg:w-5/12 bg-gray mt-4 lg:mt-0 rounded-3xl lg:ml-2 p-6 text-md sm:text-lg md:text-xl">
      <h2 className="text-xl md:text-2xl">About:</h2>
      <p className="mt-3 lg:mt-6">{about}</p>
    </section>
  );
}
