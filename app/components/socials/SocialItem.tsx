import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  icon: string;
};

export default function SocialItem({ link, icon }: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-1/4 bg-lime rounded-3xl m-1 flex items-center justify-center hover:bg-red  transition-all duration-200"
    >
      <Image src={icon} alt="social icon" width={30} height={30} />
    </Link>
  );
}
