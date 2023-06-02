"use client";
import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      thumbnail: "/thumbnails/Dister.png",
      name: "Dister",
      github: "https://github.com/project-dister/demo",
      link: "https://demo.dister.org/",
    },
    {
      thumbnail: "/thumbnails/WhalePortal.png",
      name: "Whaleportal",
      github: "",
      link: "https://whaleportal.com/",
    },
    {
      thumbnail: "/thumbnails/walletportal.png",
      name: "Walletportal",
      github: "https://github.com/hubaferencz/walletportal",
      link: "https://walletportal.org/",
    },
    {
      thumbnail: "/thumbnails/LaunchChain.png",
      name: "LaunchChain",
      github: "https://github.com/hubaferencz/LaunchChain",
      link: "https://launchchain.netlify.app/",
    },
    {
      thumbnail: "/thumbnails/Twitter.png",
      name: "Twitter clone",
      github: "https://github.com/hubaferencz/twitter-clone",
      link: "https://twitter-clone-eight-gold.vercel.app/",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const childWidth = 216;
      const totalWidth = currentIndex * childWidth;

      scrollContainer.scroll({
        left: totalWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full min-h-full h-58 md:w-7/12 bg-gray rounded-3xl mr-2 p-5 ">
      <h2 className="text-md sm:text-lg md:text-xl mb-5">Recent Projects:</h2>
      <div className="absolute top-5 right-5 flex justify-between mb-2">
        <button onClick={scrollPrev} className="mr-1">
          <Image
            src={"/left-arrow.svg"}
            width={25}
            height={25}
            alt="left-arrow"
          />
        </button>
        <button onClick={scrollNext} className="ml-1">
          <Image
            src={"/right-arrow.svg"}
            width={25}
            height={25}
            alt="right-arrow"
          />
        </button>
      </div>
      <div
        className="w-full h-full flex gap-4 overflow-x-scroll"
        ref={scrollRef}
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            link={project.link}
            thumbnail={project.thumbnail}
            name={project.name}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
