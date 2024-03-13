import Navbar from "@/src/Navbar";
import Image from "next/image";

import Site1 from "../public/img/site1.jpg";
import Site2 from "../public/img/site2.jpg";
import Web from "../public/img/web.png";

import Footer from "@/src/Footer";
import Link from "next/link";

export default function Social() {
  return (
    <>
      <main className="flex flex-col text-clr4 font-avenirbook">
        <Navbar />
        <div className="lg:flex min-h-screen bg-clr2 pt-32 px-4 lg:px-28 lg:pb-12">
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
                Já pensou um espaço organizado, profissional e com um design
                único para apresentar seu trabalho?
                <br />
                Um site oferece tudo isso de maneira personalizada, além de ser
                uma ferramenta moderna fundamental para alcance e comunicação.
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
        <div className="flex flex-col px-4 lg:px-28 bg-clr4 text-clr2 font-avenirbook text-2xl lg:py-16 py-10">
          <h1 className="text-4xl lg:text-6xl lg:leading-12 pb-10 lg:pb-16">
            Tenha um{" "}
            <span className="font-acc italic font-thin">site diferenciado</span>{" "}
            que se destaque na web.
          </h1>

          <div className="space-y-10 lg:space-y-20">
            {/* site1 */}
            <div className="lg:flex justify-evenly">
              <div className="flex flex-col lg:w-1/2 items-center">
                <Link href="https://nicolevalente.com.br/" target="_blank">
                  <Image src={Site1} alt="stories" className="object-cover" />
                </Link>
                <div className="flex flex-col text-2xl text-left font-semibold lg:w-2/5 w-4/6">
                  <Link
                    href="https://nicolevalente.com.br/"
                    target="blank"
                    className="bg-clr1 hover:bg-clr2 text-clr4 font-bold py-3 mt-6 lg:mt-10 text-xl lg:text-2xl rounded text-center"
                  >
                    Nicole Valente
                  </Link>
                </div>
              </div>
            </div>
            {/* site2 */}
            <div className="lg:flex justify-evenly">
              <div className="flex flex-col lg:w-1/2 items-center">
                <Link
                  href="https://estudiomasca.netlify.app/"
                  target="_blank"
                >
                  <Image src={Site2} alt="stories" className="object-cover" />
                </Link>
                <div className="flex flex-col text-2xl text-left font-semibold lg:w-2/5 w-4/6">
                  <Link
                    href="https://estudiomasca.netlify.app/"
                    target="blank"
                    className="bg-clr1 hover:bg-clr2 text-clr4 font-bold py-3 mt-6 lg:mt-10 text-xl lg:text-2xl rounded text-center"
                  >
                    Estúdio Masca
                  </Link>
                  <p className="text-center text-base mt-2">(em construção)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
