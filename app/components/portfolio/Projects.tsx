import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="w-full md:w-7/12 bg-zinc-900 rounded-3xl mr-2 p-5 ">
      <h2 className="text-2xl mb-5 font-bold">Recent Projects</h2>
      <div className="w-full h-full flex justify-between gap-6">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
