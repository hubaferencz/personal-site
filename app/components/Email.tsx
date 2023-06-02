"use client";

import toast from "react-hot-toast";
import Image from "next/image";

export default function Email() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("contact@hubaferencz.com");
      toast("Email copied!");
    } catch (error) {
      toast.error("Failed to copy text");
    }
  };

  return (
    <div
      className="h-16 bg-gray rounded-3xl mb-4 px-6 flex items-center cursor-pointer text-md sm:text-lg md:text-xl"
      onClick={handleCopy}
    >
      <h2 className="text-white">Email:</h2>
      <div className="flex-grow"></div>
      <h2 className="text-lime">contact@hubaferencz.com</h2>
      <Image
        src="/copy-icon.svg"
        width={20}
        height={20}
        alt="copy"
        className="ml-2"
      />
    </div>
  );
}
