import Navbar from "@/src/Navbar";
import Image from "next/image";

import Stories from "../public/img/stories.png";
import Web from "../public/img/web.png";

import Footer from "@/src/Footer";

export default function Social() {
  return (
    <>
      <main className="flex flex-col text-clr4 font-avenirbook">
        <Navbar />
        <div className="lg:flex min-h-screen bg-clr2 pt-32 px-4 lg:px-28 pb-12">
          <div className="flex flex-col text-2xl text-left font-semibold lg:w-3/5 align-middle content-center justify-center lg:pr-24">
            <div className="lg:flex justify-between">
              <h1 className="text-4xl lg:text-6xl lg:leading-12 lg:pb-0 pb-8">
                Sites profissionais para
                <span className="font-acc italic font-thin">
                  {" "}
                  qualquer
                </span>{" "}
                negócio{" "}
              </h1>
            </div>
            <div className="bg-clr4 h-0.5 rounded-md mb-2 lg:mt-10" />
            <div className="flex">
              <p className="text-xl font-avenirbook mt-6 leading-8 lg:leading-10">
                Nossa proposta é um serviço que ofereça as melhores ferramentas
                de marketing digital, como anúncios em mídias sociais, campanhas
                de e-mail e otimização de mecanismos de busca (SEO), somadas as
                melhores campanhas em plataformas de tráfego pago. <br />
                Com nossos serviços de alta qualidade, seu negócio terá a
                vantagem competitiva necessária para aumentar suas vendas de
                maneira eficiente e consistente.
              </p>
            </div>
            <a
              href="https://wa.me/5512981622637"
              target="blank"
              className="bg-clr1 hover:bg-clr4 text-clr4 hover:text-clr2 font-bold py-3 mt-6 lg:mt-8 w-1/2 text-xl lg:text-2xl lg:w-4/12 rounded text-center"
            >
              Fale Conosco
            </a>
          </div>
          <div className="relative lg:w-2/5 lg:pr-0 pr-6 lg:py-0 py-6">
            <Image src={Web} alt="hero" className="object-cover"></Image>
          </div>
        </div>
        <div className="flex flex-col px-4 lg:px-28 bg-clr4 text-clr2 font-avenirbook text-2xl py-12 lg:py-24">
          <h1 className="text-4xl lg:text-6xl lg:leading-12 lg:pb-12 pb-6">
            Tenha um{" "}
            <span className="font-acc italic font-thin">site diferenciado</span>{" "}
            que se destaque na web.
          </h1>
          <div className="lg:flex justify-evenly">
            <div className="">
              <img
                src="/img/herocasa.gif"
                alt="homegif"
                className="lg:h-[44rem] lg:pr-10 pb-4 lg:pb-0"
              />
            </div>
            <div className="flex flex-col lg:w-1/2 lg:items-center">
              <Image src={Stories} alt="stories" className="object-cover" />
              <div className="flex flex-col text-2xl text-left font-semibold lg:w-2/5 w-4/6">
                <a
                  href="https://www.behance.net/torodan"
                  target="blank"
                  className="bg-clr1 hover:bg-clr2 text-clr4 font-bold py-3 mt-6 lg:mt-20 text-xl lg:text-2xl rounded text-center"
                >
                  Nossos Projetos
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
