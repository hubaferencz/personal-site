import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full min-h-full h-80 sm:w-1/2 bg-gray rounded-3xl sm:mr-4 flex items-end justify-center relative overflow-hidden">
      <Image
        src={"/profile-pic.webp"}
        alt={"Huba Ferencz Profile Picture"}
        width={200}
        height={300}
        className="absolute bottom-0"
      />
    </section>
  );
}
