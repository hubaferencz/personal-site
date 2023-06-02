import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  thumbnail: string;
  name: string;
  github?: string;
};

export default function Project({ link, thumbnail, name, github }: Props) {
  return (
    <div className="w-52 h-52 aspect-square rounded-3xl">
      <div className="relative group">
        <Image
          src={thumbnail}
          alt={name + " portfolio project from Huba Ferencz"}
          width={210}
          height={210}
          className="w-52 h-52 rounded-3xl object-cover"
        />
        <div className="absolute inset-0 bg-lime opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-3xl transition-opacity">
          {github && github.length ? (
            <Link href={github} target="_blank">
              <Image
                src={"/socials/github.svg"}
                alt={
                  name + " portfolio project from Huba Ferencz github link icon"
                }
                width={40}
                height={40}
                className="mx-2 hover:scale-125 duration-75"
              />
            </Link>
          ) : (
            <div></div>
          )}
          <Link href={link} target="_blank">
            <Image
              src={"/link.svg"}
              alt={name + " portfolio project from Huba Ferencz link icon"}
              width={40}
              height={40}
              className="mx-2 hover:scale-125 duration-75"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
