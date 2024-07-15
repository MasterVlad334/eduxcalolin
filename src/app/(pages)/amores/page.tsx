import image1 from "@/assets/images/1.svg";
import image2 from "@/assets/images/2.svg";
import image3 from "@/assets/images/3.svg";
import image4 from "@/assets/images/4.svg";
import image5 from "@/assets/images/5.svg";
import image6 from "@/assets/images/6.svg";
import image7 from "@/assets/images/7.svg";
import bolinho from "@/assets/images/bolinho.webp";
import bolinho2 from "@/assets/images/bolinho-2.webp";
import charlotte from "@/assets/images/charlotte.png";
import lian from "@/assets/images/lian.png";
import Image from "next/image";

export default function Amores() {
  return (
    <div className="flex flex-col gap-4 items-center pt-20 h-[90dvh] relative">
      <h1 className="text-6xl text-white font-semibold">NOSSOS AMORES</h1>
      <h1 className="text-2xl text-white font-semibold text-justify w-2/4">
        Olha que cuicui mais lindinha meu Deus 💕💗💕💗💕💗💕 <br />
        Recentemente enquanto estava na sua casa, fiquei pensando no quanto a
        gente ficava cuidando da nossa filhinha, e senti muita saudade de ouvir
        os cuicui dela, era tão meigo tão amável💕💕💖💕💖💕💖💕
        <br />
        Amo essa foto dela comendo 💕💕💕
        <br />
        Lembro que levava chicória pra ela sempre
      </h1>
      <div className="w-80 h-96 bg-white p-2 pb-14 absolute top-[2%] left-[7.5%]">
        <div className="bg-black w-full h-full">
          <Image src={bolinho} className="" alt="" width={300} height={300} />
        </div>
      </div>
      <div className="w-80 h-96 bg-white p-2 pb-14 absolute top-[2%] right-[7.5%]">
        <div className=" w-full h-full flex justify-center items-center">
          <Image src={bolinho2} className="" alt="" width={300} height={300} />
        </div>
      </div>
      <div className="w-80 h-96 bg-white p-2 pb-14 absolute bottom-[4%] right-[22%]">
        <div className=" w-full h-full flex justify-center items-center">
          <Image src={charlotte} className="" alt="" width={300} height={300} />
        </div>
      </div>
      <div className="w-80 h-96 bg-white p-2 pb-14 absolute bottom-[4%] left-[22%]">
        <div className=" w-full h-full flex justify-center items-center">
          <Image src={lian} className="" alt="" width={300} height={300} />
        </div>
      </div>
      <Image
        src={image1}
        alt="image1"
        width={80}
        height={80}
        className="absolute bottom-20 left-40"
      />
      <Image
        src={image2}
        alt="image2"
        width={80}
        height={80}
        className="absolute bottom-20 right-40"
      />
      <Image
        src={image3}
        alt="image3"
        width={80}
        height={80}
        className="absolute -top-4 left-28"
      />
      <Image
        src={image4}
        alt="image4"
        width={80}
        height={80}
        className="absolute -top-6 right-24"
      />
      <Image
        src={image5}
        alt="image5"
        width={80}
        height={80}
        className="absolute bottom-0 left-40"
      />
      <Image
        src={image6}
        alt="image6"
        width={80}
        height={80}
        className="absolute bottom-0 left-120"
      />
      <Image
        src={image7}
        alt="image7"
        width={80}
        height={80}
        className="absolute bottom-0 right-40"
      />
    </div>
  );
}
