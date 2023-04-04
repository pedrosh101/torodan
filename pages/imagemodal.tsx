import { useState } from "react";
import Image from "next/image";
import Baby from "../public/img/babymary.jpg";

const ImageModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div className="bg-white p-2 rounded-md max-w-3xl">
            <Image src={Baby} alt="Image" width={1200} height={800} />
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
      {!showModal && (
        <div className="relative cursor-pointer" onClick={toggleModal}>
          <Image src={Baby} alt="Image" width={400} height={400} />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center"></div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
