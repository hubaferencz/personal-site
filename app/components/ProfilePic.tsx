import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="w-full min-h-full h-64 sm:w-1/2 bg-[#1AE4FC] rounded-3xl sm:mr-4 flex items-end justify-center relative overflow-hidden">
      <Image
        src={"/profile-pic.png"}
        alt={"Huba Ferencz Profile Picture"}
        width={300}
        height={700}
        className="absolute bottom-0"
      />
    </div>
  );
}
