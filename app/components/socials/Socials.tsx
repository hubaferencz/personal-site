import { socials } from "../../data";
import SocialItem from "./SocialItem";

export default function Socials() {
  return (
    <section className="h-20 bg-gray rounded-3xl flex justify-between p-2">
      {socials.map((social, index) => (
        <SocialItem key={index} link={social.link} icon={social.icon} />
      ))}
    </section>
  );
}
