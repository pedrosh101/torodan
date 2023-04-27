import Image from "next/image";
import Stories from "../../public/img/stories.png";

const ImageModal = () => {
  return (
    <div className="flex flex-col px-4 lg:px-28 bg-clr4 text-clr2 font-avenirbook text-2xl py-12 lg:py-24">
      <h1 className="text-4xl lg:text-6xl lg:leading-12 lg:pb-12 pb-6">
        A <span className="font-acc italic font-thin">identidade visual</span>{" "}
        das suas redes importa e muito.
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
  );
};

export default ImageModal;
