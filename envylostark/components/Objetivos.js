import React from 'react';
import {RiSwordFill} from 'react-icons/ri'
import {GiDragonHead} from 'react-icons/gi'
import {BsPeopleFill} from 'react-icons/bs'

export const Objetivos = () => {
  return <div>
    <div className="bg-zinc-900 flex md:pt-20 pt-5 justify-center">
        <div className="w-[25%] h-1 rounded-full bg-dorado inline-flex"></div>
    </div>
    <section className="text-gray-400 bg-zinc-900 body-font">
    <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Nuestros objetivos</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">Somos una hermandad enfocada al <strong>High-end</strong> en MMO's, por lo que aspiramos a completar y disfrutar de todo el contenido disponible en el juego:</p>
        <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-dorado inline-flex"></div>
        </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
            <RiSwordFill className='h-10 w-10 text-dorado'/>
            </div>
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">PVP</h2>
            <p className="leading-relaxed text-base">Organízate con tus compañeros para formar un equipo de <strong>Arenas</strong> y participa con la hermandad en las frenéticas <strong>batallas de gremios</strong>.</p>
            </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
            <GiDragonHead className='h-12 w-12 text-dorado'/>
            </div>
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">PVE</h2>
            <p className="leading-relaxed text-base">Realiza junto a otros miembros las diversas <strong>mazmorras</strong> y <strong>raids</strong> disponibles, y únete a la hermandad en la caza de los <strong>bosses de mundo</strong>.</p>
            </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
            <BsPeopleFill className='h-10 w-10 text-dorado'/>
            </div>
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Social</h2>
            <p className="leading-relaxed text-base">No todo va a ser tryhardear. Conoce gente para disfrutar más de tu experiencia en el juego y pásate por nuestro <strong>discord</strong>.</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  </div>;
};
