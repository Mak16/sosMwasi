import React from 'react'
import SignalerCas from './SignalerCas'
import Type from './Type';
export default function Low() {
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
    </div>
  )
}
