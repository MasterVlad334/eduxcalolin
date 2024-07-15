import Image from "next/image";
import momentos from "@/assets/images/momentos.png";

export default function Momentos() {
  return (
    <main className="flex h-[90dvh] text-white">
      <Image src={momentos} alt="" width={2240} height={600} />
    </main>
  );
}
