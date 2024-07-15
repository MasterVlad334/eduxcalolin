import Image from "next/image";
import futuro from "@/assets/images/futuro.png";

export default function Momentos() {
  return (
    <main className="flex h-[90dvh] text-white">
      <Image src={futuro} alt="" width={2240} height={1260} />
    </main>
  );
}
