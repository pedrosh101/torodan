import { useState } from "react";
import Image from "next/image";
import Focus from "../../public/img/FocusImóveis.png";
import Litoral from "../../public/img/LitoralSulImóveis.png";
import Link from "next/link";

const ImageModal = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModal1 = () => {
    setShowModal1(!showModal1);
  };
  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  return (
    <div className="flex flex-col px-4 lg:px-28 bg-clr4 text-clr2 font-avenirbook text-2xl py-12 lg:py-24">
      <h1 className="text-4xl lg:text-6xl lg:leading-12 lg:pb-12 pb-6">
        A <span className="font-acc italic font-thin">identidade visual</span>{" "}
        das suas redes importa e muito.
      </h1>
      {showModal1 && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal1}
        >
          <div className="bg-white p-2 rounded-md max-w-3xl">
            <Image src={Focus} alt="Image" width={1800} height={1000} />
          </div>
        </div>
      )}
      {showModal2 && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal2}
        >
          <div className="bg-white p-2 rounded-md max-w-3xl">
            <Image src={Litoral} alt="Image" width={1800} height={1000} />
          </div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0 text-lg leading-5 w-full justify-evenly font-bold">
        <div className="flex flex-col space-y-2 items-center">
          <div className="cursor-pointer h-fit w-fit border-2 rounded-2xl border-clr2">
            <Image
              src={Focus}
              alt="focus"
              width={300}
              height={300}
              onClick={toggleModal1}
              className="rounded-xl"
            />
          </div>
          <h1>
            Clique{" "}
            <Link
              target="_blank"
              href={"https://www.behance.net/gallery/167475355/Focus-Imoveis"}
              className="font-acc italic cursor-pointer font-thin text-clr1 hover:text-clr3"
            >
              aqui
            </Link>{" "}
            para ver o projeto completo.
          </h1>
        </div>
        <div className="flex flex-col space-y-2 items-center">
        <div className="cursor-pointer h-fit w-fit border-2 rounded-2xl border-clr2">
            <Image
              src={Litoral}
              alt="litoral"
              width={300}
              height={300}
              onClick={toggleModal2}
              className="rounded-xl"
            />
          </div>

          <h1>
            Clique{" "}
            <Link
              target="_blank"
              href={
                "https://www.behance.net/gallery/167893469/Litoral-Sul-Imoveis"
              }
              className="font-acc italic cursor-pointer font-thin text-clr1 hover:text-clr3"
            >
              aqui
            </Link>{" "}
            para ver o projeto completo.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
