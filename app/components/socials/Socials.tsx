import React from "react";
import SocialItem from "./SocialItem";

type Props = {};

export default function Socials({}: Props) {
  return (
    <div className="h-20 bg-zinc-900 rounded-3xl mt-2 flex justify-between p-1">
      <SocialItem />
      <SocialItem />
      <SocialItem />
      <SocialItem />
    </div>
  );
}
