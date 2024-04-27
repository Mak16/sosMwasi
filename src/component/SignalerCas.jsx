import React from 'react'
import rectangle1 from "../assets/images/Rectangle 1 .png"

export default function SignalerCas() {
  return (
    <div>
      <div  className='w-[90%] mx-auto shadow-black shadow-2xl pb-10 px-10 lg:m-10 m-5'>
        <div className=' space-y-5 pt-5'>
        <h2 className='lg:text-start text-center text-[#0096F5] font-bold text-2xl'>Signaler un cas</h2>
          <img className='w-full h-full' src={rectangle1} alt="Police" />
        </div>
        <div className=' space-y-5 pt-5'>
          <h2 className='lg:text-start text-center text-[#0096F5] font-bold text-2xl'>Appeler Police Secours</h2>
          <p className='text-center lg:text-start text-[#383838] leading-7'>Appelez le 17, en particulier lorsque la situation représente un danger grave et immédiat pour vous ou d’une victime. Soyez aussi précis que possible en indiquant aux forces de sécurité le lieu de l’agression, le nombre d’agresseurs, le nombre de victimes, la présence éventuelle d’armes, la présence d’enfants, les codes pour entrer dans l’immeuble ou toute autre information qui faciliteront leur intervention. Evitez d’adopter des comportements qui vous mettraient en danger.</p>
          <button className="bg-[#0096F5] font-bold text-white flex justify-center items-center py-3 px-4">
            Appeler maintenant
          </button>
        </div>
      </div>
    </div>
  )
}
