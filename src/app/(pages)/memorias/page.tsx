import Image from "next/image";
import carolxbolinho from "@/assets/images/carolxbolinho.png";
import carollowquality from "@/assets/images/carollowquality.png";
import carolxedu from "@/assets/images/carolxedu.png";

export default function Sobre() {
  return (
    <main className="flex h-[90dvh] text-white text-justify">
      <div className="px-2 w-full">
        <div className="h-1/2 flex flex-row-reverse items-center p-4">
          <div>
            Não sei se já te contei, aqui foi literalmente quando decidi que
            queria ter filhos com você, nunca tinha visto a ideia de ter filhos
            tão legal, mas quando vi você com a bolinho o jeito que olhava para
            ela com tanto amor e carinho eu soube que queria ter filhos com você
            💖💕. seríamos pais maravilhosos, lembro da gente cuidando dela
            dando amor e carinho, você sempre foi uma mãe incrível pra ela, e eu
            fui um pai maravilhoso, amo a bolinho e amo você do fundo do meu
            coração 💕💕💕💗💗💕
          </div>
          <div className="p-4 pb-6">
            <div className="w-80 h-96 bg-white p-2 pb-14">
              <div className=" w-full h-full flex justify-center items-center">
                <Image
                  src={carolxbolinho}
                  className=""
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 flex  items-center">
          <div>
            Literalmente a primeira foto que tirei de você, quando entrei na
            escola foi a primeira pessoa que reparei, eu pensei meu Deus é ela.
            Simplesmente a garota mais linda que já vi na vida. Tudo que eu
            queria era que você fosse da minha sala, pensei quais as chances?
            Quando entrei na sala lá estava você, em cima de uma mesa kkkk, eu
            pensando que tinha que dar um jeito de falar com você, durante dias
            não parava de pensar no quanto queria falar com você, quando
            conversei tive 1000% de certeza que queria passar o resto da minha
            vida com você, o quão incrível você era o quanto eu ficava feliz ao
            seu lado, tudo que eu queria é que você fosse minha namorada naquela
            época 💖💕💖💕💖💕💗💕💖
          </div>
          <div className="p-4 pb-6">
            <div className="w-80 h-96 bg-white p-2 pb-14">
              <div className=" w-full h-full flex justify-center items-center">
                <Image
                  src={carollowquality}
                  className=""
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[50%] left-[48.3%] text-5xl animate-pulse">
        ❤
      </div>

      <div className="px-2 w-full">
        <div className="h-1/2 flex flex-row-reverse">
          <div className="mt-2">
            Quando fomos no casamentos juntos, ao entrar lá pensei meu Deus,
            como será o nosso casamento? Literalmente me imaginei em algo
            parecido como quebec e o palacio, você de vestido branco e de véu eu
            extremamente nervoso os padrinhos madrinhas tudo sempre me imaginei
            em um casamento grande com você pois merecemos 💕🩷💖💖💕. É
            literalmente um dos meus sonhos me casar com você em uma igreja
            gigante uma festa imensa, decoração tudo💕💕🩷💕
          </div>
          <div className="p-4 pb-6">
            <div className="w-80 h-96 bg-white p-2 pb-14">
              <div className=" w-full h-full flex justify-center items-center">
                <Image
                  src={carolxedu}
                  className=""
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 flex">
          <div className="mt-2">
            Hoje me arrependo de não ter aproveitado todas as oportunidades que
            tinha de te beijar, não consigo olhar pra você um segundo que eu não
            pense em te beijar e abraçar 💕💗💕Vejo essas fotos e penso, nossa
            história não pode acabar assim, a gente conseguiu superar tanta
            coisa, realmente não me imagino sem você na minha vida mais, você
            faz parte de mim, é realmente meu mundo amor 💕💖💕
          </div>
          <div className="p-4 pb-6">
            <div className="w-80 h-96 bg-white p-2 pb-14">
              <div className=" w-full h-full flex justify-center items-center">
                <Image
                  src={carolxedu}
                  className=""
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
