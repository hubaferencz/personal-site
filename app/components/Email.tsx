"use client";
import { email } from "../data";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Email() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast("Email copied!");
    } catch (error) {
      toast.error("Failed to copy text");
    }
  };

  return (
    <section
      className="h-16 bg-gray rounded-3xl mb-4 px-6 flex items-center cursor-pointer text-md sm:text-lg md:text-xl"
      onClick={handleCopy}
    >
      <h2 className="text-xl md:text-2xl">Email:</h2>
      <div className="flex-grow"></div>
      <h2 className="text-lime">{email}</h2>
      <Image
        src="/copy-icon.svg"
        width={25}
        height={25}
        alt="copy"
        className="ml-1"
      />
    </section>
  );
}
