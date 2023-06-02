import Image from "next/image";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="h-16 bg-gray rounded-3xl mt-4 sm:mt-0 px-6 flex items-center cursor-pointer text-md sm:text-lg md:text-xl">
      <h2>Resume:</h2>
      <div className="flex-grow"></div>
      <h2 className="flex items-center">
        <Link href={""} className="text-lime flex items-center hover:underline">
          Check it out{" "}
          <Image
            src={"/arrow.svg"}
            className="ml-1"
            alt="open resume"
            width={25}
            height={25}
          />
        </Link>
      </h2>
    </div>
  );
}
