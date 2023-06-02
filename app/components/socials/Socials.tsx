import SocialItem from "./SocialItem";

export default function Socials() {
  const socials = [
    {
      icon: "/socials/github.svg",
      link: "https://github.com/hubaferencz",
    },
    {
      icon: "/socials/linkedin.svg",
      link: "https://www.linkedin.com/in/hubaferencz/",
    },
    {
      icon: "/socials/twitter.svg",
      link: "https://twitter.com/HubaFerencz",
    },
    {
      icon: "/socials/telegram.svg",
      link: "https://t.me/hubaferencz",
    },
  ];

  return (
    <div className="h-20 bg-gray rounded-3xl flex justify-between p-2">
      {socials.map((social, index) => (
        <SocialItem key={index} link={social.link} icon={social.icon} />
      ))}
    </div>
  );
}
