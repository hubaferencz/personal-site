"use client";
import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import Image from "next/image";

import { projects } from "../../data";

export default function Projects() {
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
      const childWidth = 224;
      const totalWidth = currentIndex * childWidth;

      scrollContainer.scroll({
        left: totalWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-full h-58 lg:w-7/12 bg-gray rounded-3xl mr-2 p-5 ">
      <h2 className="text-xl md:text-2xl mb-5">Recent Projects:</h2>
      <div className="absolute top-5 right-5 hidden sm:flex justify-between mb-2">
        <button onClick={scrollPrev} className="">
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
    </section>
  );
}
