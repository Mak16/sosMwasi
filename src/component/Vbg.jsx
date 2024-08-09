import img from "../assets/images/image 4.png";
import img1 from "../assets/images/refuse-isolated-r.png";
import { Link } from "react-router-dom";

export default function VBG() {
  return (
    <>
      <div className="bg-[#91D2FB] w-full">
        <div className="flex lg:flex-row flex-col w-[70%] lg:h-[80vh] mx-auto items-center justify-between lg:pt-28 lg:pb-0 pb-10 pt-0">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-[#036D98] text-3xl sm:text-5xl text-center lg:text-left font-bold font-poppins sm:pt-0 pt-40 ">
              Violences Basées sur le Genre
            </h1>
            <p className="text-[#095789] text-lg sm:text-xl mb-6 pt-7 font-poppins text-center lg:text-left ">
              La violence basée sur le genre (VBG), parfois aussi appelée
              violence sexiste, se réfère à l’ensemble des actes nuisibles,
              dirigés contre un individu ou un groupe d’individus en raison de
              leur identité de genre. Elle prend racine dans l’inégalité entre
              les sexes, l’abus de pouvoir et les normes néfastes.
            </p>
          </div>
          <div className="h-full lg:block hidden">
            <img className="object-contain h-full w-full" src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="mb-8 lg:py-10 py-5">
        <p className="text-[#036D98] text-2xl sm:text-4xl font-semibold font-poppins text-center my-8">
          Les différents types de Violences sexistes
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-14 items-center">
          <div className="bg-blue h-72 w-72 flex justify-center items-center p-4">
            <p className="text-white text-center lg:text-2xl text-2xl font-poppins">
              Violence Sexuelle
            </p>
          </div>
          <div className="bg-blue h-72 w-72 flex justify-center items-center p-4">
            <p className="text-white text-center lg:text-2xl text-2xl font-poppins">
              Harcèlement Sexuel
            </p>
          </div>
          <div className="bg-blue h-72 w-72 flex justify-center items-center p-4">
            <p className="text-white text-center lg:text-2xl text-2xl font-poppins">
              Violence Conjugale
            </p>
          </div>
          <div className="bg-blue h-72 w-72 flex justify-center items-center p-4">
            <p className="text-white text-center lg:text-2xl text-2xl font-poppins">
              Mariage Forcé
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#91D2FB] w-screen h-[40vh] flex flex-col pl-0 space-y-5 lg:pl-20 lg:items-start justify-center items-center">
        <p className="text-[#095789] text-center text-lg lg:text-xl px-2 lg:px-0 font-poppins">
          Toutes les formes de violences sexistes sont des actes punis et
          condamnés par la loi
        </p>
        <Link
          to="/sosMwasi/law"
          className="text-[#095789] font-poppins flex font-bold"
        >
          QUE DIT LA LOI SUR LES VBG?
          <img className="w-7 h-7 font-bold" src={img} alt="img" />
        </Link>
      </div>
    </>
  );
}
