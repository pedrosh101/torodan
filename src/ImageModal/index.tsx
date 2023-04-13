import { useState } from "react";
import Image from "next/image";
import Baby from "../../public/img/babymary.jpg";

const ImageModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col px-4 lg:px-28 bg-clr4 text-clr2 font-avenirbook text-2xl py-24">
      <h1 className="text-4xl lg:text-6xl lg:leading-12 pb-8">
        A <span className="font-acc italic font-thin">identidade visual</span>{" "}
        das suas redes importa e muito.
      </h1>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div className="bg-white p-2 rounded-md max-w-3xl">
            <Image src={Baby} alt="Image" width={1800} height={1000} />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.707 5.293a1 1 0 011.414 0L10 8.586l2.879-2.88a1 1 0 111.414 1.414L11.414 10l2.88 2.879a1 1 0 11-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <div className="flex space-x-12">
        <div className="flex flex-col space-y-2">
          <div className="cursor-pointer h-fit w-fit">
            <Image
              src={Baby}
              alt="Image"
              width={300}
              height={300}
              onClick={toggleModal}
            />
          </div>
          <h1>
            Clique{" "}
            <span className="font-acc italic cursor-pointer font-thin text-clr1 hover:text-clr3">
              aqui
            </span>{" "}
            para ver o projeto completo.
          </h1>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="cursor-pointer h-fit w-fit">
            <Image
              src={Baby}
              alt="Image"
              width={300}
              height={300}
              onClick={toggleModal}
            />
          </div>
          <h1>
            Clique{" "}
            <span className="font-acc italic cursor-pointer font-thin text-clr1 hover:text-clr3">
              aqui
            </span>{" "}
            para ver o projeto completo.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
