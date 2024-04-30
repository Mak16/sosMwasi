import React from 'react'
import SignalerCas from './SignalerCas'
import Type from './Type';
import { Link } from 'react-router-dom';
import img from "../assets/images/image 4.png"

export default function SignalerUnCas() {
  return (
    <div>
      <div className="bg-[#0096F5] w-full h-screen">
        <div className="absolute top-[25%] sm:top-[50%] left-[5%] sm:w-[40%]  z-20 w-[80%] sm:m-[50px] my-24 translate-y-[-50%] ">
          <h1 className="text-white text-2xl sm:text-4xl font-bold sm:pt-0 pt-40 ">
          Violence à l’égard des femmes et des filles
          </h1>
          <p className="text-white mb-[25px] pt-[30px] ">
            La violence à l’égard des femmes et des filles se définit comme tout acte de violence basée sur le genre entraînant, ou pouvant entraîner, des souffrances ou des troubles physiques, sexuels ou mentaux. Cette définition inclut la menace de tels actes, la coercition ou la privation arbitraire de liberté, que ce soit dans la vie publique ou privée.
          </p>
            <p className="text-white font-bold">
              ONUFEMMES - <br /> unwomen.org
            </p>
        </div>
      </div>
      <SignalerCas/>
      <Type/>
      <div className='bg-[#91D2FB] w-screen h-[40vh] flex flex-col pl-0 space-y-5 lg:pl-20 lg:items-start justify-center items-center'>
        <p className='text-[#095789] text-center'>Agissez dès aujourd’hui pour contribuer à mettre fin à la violence à l’égard des femmes.</p>
        <Link to='' className='text-[#095789] flex font-bold flex-row justify-center items-center text-center'>
          LE CHANGEMENT COMMENCE PAR VOUS ET AVEC VOUS.
          <img className='w-7 h-7' src={img} alt="img" />
        </Link>
      </div>
    </div>
  )
}
