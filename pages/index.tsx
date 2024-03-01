import Navbar from "@/src/Navbar";
import Head from "next/head";
import Image from "next/image";
import Hero from "../public/img/hero.png";
import Social from "../public/img/socialmedia.jpg";
import Trafego from "../public/img/trafego.jpg";
import Footer from "@/src/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Torodan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Traga seu negócio para a web."
        />
        <meta
          name="keywords"
          content="social media, imóveis, imobiliária, tráfego pago, corretores"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className="flex flex-col text-clr2 font-avenirbook">
        <Navbar />
        <div className="lg:flex min-h-screen bg-clr4 pt-28 px-4 lg:px-28 lg:pb-12">
          <div className="flex flex-col text-2xl text-left font-semibold lg:w-3/5 align-middle content-center justify-center lg:pr-24">
            <div className="lg:flex justify-between">
              <h1 className="text-4xl lg:text-6xl lg:leading-12 lg:pb-0 pb-6">
                Que tal{" "}
                <span className="font-acc italic font-thin">
                  ser descoberto
                </span>{" "}
                de uma maneira moderna?
              </h1>
            </div>
            <div className="bg-clr2 h-0.5 rounded-md lg:mt-10" />
            <div className="flex">
              <p className="text-xl font-avenirbook mt-6 leading-8 lg:leading-10">
                A Torodan apresenta as melhores soluções para a inclusão do seu
                negócio no mercado digital. Através de engenharias de marketing
                modernas, garantimos uma presença online segura e voltada para
                resultados reais. Permita ser encontrado na web de maneira
                inteligente e fácil.
              </p>
            </div>
            <a
              href="https://wa.me/5512981622637"
              target="blank"
              className="bg-clr1 hover:bg-clr2 text-clr4 font-bold py-3 mt-6 lg:mt-8 w-1/2 text-xl lg:text-2xl lg:w-4/12 rounded text-center"
            >
              Fale Conosco
            </a>
          </div>
          <div className="relative lg:w-2/5 lg:pr-0 pr-6 lg:py-0 py-6">
            <Image src={Hero} alt="hero" className="object-cover"></Image>
          </div>
        </div>
      </main>

      <div className="flex flex-col text-clr4 font-avenirbook min-h-screen bg-clr2 lg:py-28 py-12 px-4 lg:px-28">
        <h1 className="text-4xl lg:text-5xl lg:leading-12">
          Nossa meta: trazer sua empresa para o{" "}
          <span className="font-acc italic font-thin">digital</span> levando seu
          trabalho aos olhos certos.
        </h1>
        <div className="lg:flex relative w-full lg:space-x-6 space-y-6 lg:space-y-0 lg:pt-16 pt-4">
          <Link href="/sites" legacyBehavior>
            <div className="overflow-hidden shadow-lg lg:w-1/2 rounded-2xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:text-clr3">
              <div className="p-6 flex flex-col w-full justify-center cursor-pointer">
                <Image
                  src={Trafego}
                  alt="Card background"
                  fill
                  className="object-cover -z-30"
                />
                <h2 className="font-bold text-4xl lg:text-6xl mb-5 lg:px-14 lg:pt-36 pt-10">
                  Criação de Sites Profissionais
                </h2>
                <h3 className="font-semibold tracking-wide text-xl lg:text-2xl lg:px-14 pb-10 lg:pb-36">
                  Hoje, mais do que nunca, a presença online é vital para o
                  sucesso de qualquer negócio. E um site te permite construir isso de maneira inteligente e profissional. <br />
                  Se destaque na web sendo facilmente encontrado por um cliente
                  em potencial.
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/social" legacyBehavior>
            <div className="overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl lg:w-1/2 transition duration-500 ease-in-out transform hover:text-clr3">
              <div className="p-6 flex flex-col w-full justify-center cursor-pointer">
                <Image
                  src={Social}
                  alt="Card background"
                  fill
                  className="object-cover -z-30"
                />
                <h2 className="font-bold text-4xl lg:text-6xl mb-5 lg:px-14 lg:pt-36 pt-10">
                  Gerenciamento de Mídia Social
                </h2>
                <h3 className="font-semibold tracking-wide text-xl lg:text-2xl lg:px-14 pb-10 lg:pb-36">
                  Criar um conteúdo de qualidade e que ajude a transmitir os
                  valores da sua empresa é fundamental no marketing digital.
                  <br />
                  Permita que suas redes sociais reflitam a qualidade do
                  seu trabalho.
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/*  Nosso processo de trabalho   */}

      <div className="flex flex-col px-4 lg:px-28 bg-clr4 text-clr2 font-avenirbook text-2xl py-12 lg:py-24">
        <h1 className="text-4xl lg:text-6xl lg:leading-12 lg:pb-16 pb-6">
          Em poucos passos sua{" "}
          <span className="font-acc italic font-thin">imagem na web</span>{" "}
          evolui muito.
        </h1>
        <div className="space-y-10">
          <div className="flex flex-col lg:items-center">
            <div className="flex lg:text-4xl text-3xl mb-2">
              <h1 className="font-acc pr-3">1</h1>
              <h2>Briefing</h2>
            </div>
            <p>Uma conversa para planejarmos o projeto</p>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="flex lg:text-4xl text-3xl mb-2">
              <h1 className="font-acc pr-3">2</h1>
              <h2>Design</h2>
            </div>
            <p>Para deixar o site sob medida e com a cara do seu negócio</p>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="flex lg:text-4xl text-3xl mb-2">
              <h1 className="font-acc pr-3">3</h1>
              <h2>Programação</h2>
            </div>
            <p>Aqui seu site ganha vida com códigos otimizados</p>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="flex lg:text-4xl text-3xl mb-2">
              <h1 className="font-acc pr-3">4</h1>
              <h2>Responsividade</h2>
            </div>
            <p>Para o site funcionar bem no celular, tablet ou desktop</p>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="flex lg:text-4xl text-3xl mb-2">
              <h1 className="font-acc pr-3">5</h1>
              <h2>Entrega</h2>
            </div>
            <p>Hora do lançamento!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
