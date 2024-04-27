import React from 'react'
import association from "../assets/images/Rectangle 4.png"
import effacer from "../assets/images/Rectangle 2.png"
import temoin from "../assets/images/Rectangle 3.png"


export default function Type() {
  return (
    <div className='w-[90%] mx-auto  pb-10 px-10'>
        <h2 className='lg:text-start text-center text-[#0096F5] font-bold text-3xl pb-5'>Assistance</h2>
       <div className='flex lg:flex-row flex-col justify-center mx-auto items-center w-full gap-4'>
        <div className='lg:w-1/4 w-full'>
          <img src={association} alt="870" className='w-full h-32 object-contain' />
         <div className='flex flex-col space-y-4 bg-white shadow-xl p-4 justify-center items-center'>
         <h2 className='text-[#E90000] font-bold text-2xl'>250</h2>
          <h3 className='text-[#2B2B2B] font-bold text-xl text-center'>Trouver une association</h3>
          <p className='text-[#383838] text-center'>La violence à l’égard des femmes et des filles se définit comme tout acte de violence basée sur le genre entraînant... </p>
          <button className="bg-[#0096F5] text-white flex justify-center items-center py-1 px-2">
          Trouver maintenant
          </button>
         </div>
        </div>
        <div className='lg:w-1/4 w-full'>
          <img src={effacer} alt="550" className='w-full h-32 object-contain' />
          <div  className='flex flex-col space-y-4 bg-white shadow-xl p-4 justify-center items-center'>
          <h2 className='text-[#E90000] font-bold text-2xl'>550</h2>
          <h3 className='text-[#2B2B2B] font-bold text-xl text-center'>Savoir effacer mes traces</h3>
          <p className='text-[#383838] text-center'>La violence à l’égard des femmes et des filles se définit comme tout acte de violence...</p>
          <button className="bg-[#0096F5] text-white flex justify-center items-center py-1 px-2">
          Savoir maintenant
          </button>
          </div>
        </div>
        <div className='lg:w-1/4 w-full'>
          <img src={temoin} alt='870'  className='w-full h-32 object-contain' />
         <div  className='flex flex-col space-y-4 bg-white shadow-xl p-4 justify-center items-center'>
         <h2 className='text-[#E90000] font-bold text-2xl'>870</h2>
          <h3 className='text-[#2B2B2B] font-bold text-xl text-center'>Je suis témoin d’une agression</h3>
          <p className='text-[#383838] text-center'>Signaler une agression ou harcèlement  sexistes et sexuels  lorsque que vous êtes témoin.</p>
          <button className="bg-[#0096F5] text-white flex justify-center items-center py-1 px-2">
            Denoncer maintenant
          </button>
         </div>
        </div>
      </div>
    </div>
  )
}
