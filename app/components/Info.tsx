"use client";
import Image from "next/image";

export default function Info() {
  //   toast('Hello Darkness!',
  //   {
  //     icon: '💌',
  //     style: {
  //       borderRadius: '10px',
  //       background: '#333',
  //       color: '#fff',
  //     },
  //   }
  // );

  return (
    <div
      className="h-16 bg-gray rounded-3xl mb-4 px-6 flex items-center cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText("contact@hubaferencz.com");
      }}
    >
      <h1 className="text-lime">contact@hubaferencz.com</h1>
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
