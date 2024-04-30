import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/image 4.png"

function Type({title,children}) {
    return(
        <div className='xl:w-[30%] mx-auto my-4 p-8 bg-white md:w-[45%] shadow-2xl sm:w-[27%] w-full space-y-5'>
            <div className='bg-[#0096F5] w-10 h-10 flex justify-center items-center'>
                <Icon icon="octicon:law-16" className='w-8 h-8 text-white'/>
            </div>
            <div className='space-y-3'>
                <h2 className='text-[#383838] font-bold text-xl'>{title}</h2>
                <p className='text-[#383838]'>{children}</p>
                <Link className='text-[#0096F5]'>Voir plus...</Link>
            </div>
        </div>
    )
}

export default function Law() {
  return (
    <div className='mt-24'>
        <h2 className='lg:text-start text-center text-[#0096F5] lg:ml-20 font-bold text-2xl'>Que dit la loi?</h2>
        <div className='flex flex-row w-[80%] mx-auto flex-wrap'>
            <Type title='Violence Conjugale'>
                La violence conjugale est une violence sexuelle fondée sur le genre, c’est-à-dire sur le fait que les femmes et les hommes sont des êtres différents.
            </Type>
            <Type title='Mariage Forcé'>
                Le mariage forcé est une forme de violence sexuelle fondée sur le genre, c’est-à-dire sur le fait que les femmes et les hommes sont des êtres différents.
            </Type>
            <Type title='Violence Sexuelle'>
                La violence sexuelle est une violence sexuelle fondée sur le genre, c’est-à-dire sur le fait que les femmes et les hommes sont des êtres différents.
            </Type>
            <Type title='Violence Sexiste'>
                La violence sexiste est une violence sexuelle fondée sur le genre, c’est-à-dire sur le fait que les femmes et les hommes sont des êtres différents.
            </Type>
            <Type title='Harcèlement Sexuel'>
                Le harcèlement sexuel est une violence sexuelle fondée sur le genre, c’est-à-dire sur le fait que les femmes et les hommes sont des êtres différents.
            </Type>
            <Type title='Avortement'>
                L’avortement est une violence sexuelle fondée sur le genre, c’est-à-dire sur le fait que les femmes et les hommes sont des êtres différents.
            </Type>
        </div>
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
