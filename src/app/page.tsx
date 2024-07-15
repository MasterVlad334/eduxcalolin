import eduxcarol from "@/assets/images/eduxcarol-home-2.jpeg";
import dandelion from "@/assets/images/bottom-dandelion.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[90dvh] text-white justify-center w-full relative">
      <div className="px-2 pt-20 z-10">
        <Image
          src={eduxcarol}
          alt="nós"
          width={1200}
          height={900}
          className="object-contain"
        />
      </div>
      <Image
        src={dandelion}
        alt="dandelion"
        width={1920}
        height={100}
        className="absolute bottom-0"
      />
    </main>
  );
}
