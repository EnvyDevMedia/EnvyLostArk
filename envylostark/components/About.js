import React from 'react';
import Image from 'next/image';
import logotipo from '../assets/logotipoSVG.svg'
import banner from '../assets/banner.jpg'

export const About = () => {
  return (
  <div>
    <section className="text-gray-400 bg-zinc-900 body-font">
    <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-56 overflow-hidden">
            <Image 
                alt="content" 
                className="object-cover object-center h-full w-full bg-fixed" 
                width={1200}
                height={550}
                src={banner}
            />
        </div>
        <div className="flex flex-col sm:flex-row md:mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-600">
                <Image 
                alt="content" 
                className="object-cover object-center h-full w-full" 
                src={logotipo}
                />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">ENVY CLUB</h2>
                <div className="w-12 h-1 bg-dorado rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-400">Staff oficial</p>
            </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">ENVY es una comunidad de jugadores enfocados principalmente en los <strong>MM0's</strong>. Desde su creación en <strong>2015</strong>,
                se ha desarrollado su mayor actividad en juegos como <strong>World of Warcraft</strong> y <strong>Diablo III</strong>. Sin embargo, también existen jugadores con diversos gustos,
                enfocados al competitivo en juegos como Valorant, League of Legends o CSGO.<br></br> <br></br>Desde ahora, comienza un largo camino en <strong>Lost Ark</strong> gracias a su lanzamiento en Europa.
                Sean cuales sean tus gustos, si te gusta Lost Ark y quieres conocer gente para disfrutar de esta nueva aventura, no dudes en contactar con nosotros.</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  </div>);
};
