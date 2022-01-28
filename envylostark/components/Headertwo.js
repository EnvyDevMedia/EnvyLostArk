/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import ReactPlayer from 'react-player/lazy'

import {

    MenuIcon,

    XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import logo from './../assets/logotipoSVG.svg'


const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Conócenos', href: '#about' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function Headertwo({ openContact }) {
    const [open, setOpen] = useState(true);
    const [countdownDate, setCountdownDate] = useState(new Date('02/08/2022').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };


    return (
        <div className="bg-zinc-900 ">
            {open &&

                <div className="relative bg-black">
                    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                        <div className="pr-16 sm:text-center sm:px-16">
                            <p className="font-medium text-white">
                                <span className="md:hidden">
                                    Lanzamiento de Lost Ark
                                </span>
                                <span className="hidden md:inline">
                                    Lanzamiento de Lost Ark
                                </span>
                                <span className="block sm:ml-2 sm:inline-block">
                                    <a

                                        className="text-white font-bold border-b-2 rounded-sm"
                                    >
                                        {" "}
                                    {state.days} Días, {state.hours} Horas, {state.minutes} Minutos, {state.seconds} Segundos
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                            <button
                                type="button"
                                className="flex p-2 rounded-md "
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            }
            <header>
                <Popover className="relative bg-zinc-900">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <Image
                                    width={70}
                                    height={70}
                                    src={logo}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-dorado rounded-md p-2 inline-flex items-center justify-center text-white   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dorado">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">


                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} >
                                    <a className="text-base font-medium text-gray-400 hover:text-white">
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                            <button
                                onClick={openContact}
                                className="inline-flex items-center px-4 py-2 border border-yellow-500 text-base font-medium rounded-md text-white hover:bg-gradient-to-r from-[#bfa251] via-[#fff8d2] to-[#bfa251] hover:text-gray-900"
                            >
                                Unirme
                            </button>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-zinc-900 ">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Image
                                                width={50}
                                                height={50}
                                                src={logo}
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-dorado rounded-md p-2 inline-flex items-center justify-center text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dorado">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                </div>
                                <div className="py-6 px-5">
                                    <div className="flex flex-col gap-4">
                                        {navigation.map((item) => (
                                            <Link key={item.name}
                                                href={item.href} >
                                                <a

                                                    className="text-base font-medium text-gray-400 hover:text-white"
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            onClick={openContact}
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dorado"
                                        >
                                            Unirme
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative pt-10">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-900" />
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <ReactPlayer
                                        playing={true}
                                        controls={false}
                                        muted={true}
                                        loop={true}
                                        width="100%"
                                        height="100%"
                                        url="https://youtu.be/272hIdT6J84"
                                        className="w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6  lg:px-8">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Bienvenidos a</span>
                                        <span className="block bg-clip-text text-transparent pb-4 bg-gradient-to-r from-[#fef0a8] via-[#eac04b] to-[#bfa251]">Envy club</span>
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                                        Embárcate con nosotros en una nueva aventura en el mundo de Arkesia.
                                        Buscamos jugadores que quieran <strong>disfrutar de una experiencia única</strong>, con la mejor compañía posible.<br></br> <br></br> <strong>¡Te esperamos!</strong>
                                    </p>
                                    {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                Get started
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                            >
                                                Live demo
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo cloud */}
                    <div className="bg-zinc-900">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wide">
                                Videojuegos a los que jugamos
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://www.nicepng.com/png/full/11-114826_wow-companion-app-icon-google-play-world-of.png" alt="Tuple" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://d1glcu56fxkf6q.cloudfront.net/statics/2022-01-15/images/LostArkIcon.png" alt="Mirage" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon_thumb/aeb3135b436aa55373822c010763dd54.png"
                                        alt="StaticKit"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://yoolk.ninja/wp-content/uploads/2020/06/Games-Valorant-1024x1024.png"
                                        alt="Transistor"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://external-preview.redd.it/FTMkIMnMhnqxCtx-8wlu1wzQaH1UFcA9CaZ3TugXviA.png?auto=webp&s=df74aa3b8d84538bc6a8253a47a7677d903861b0"
                                        alt="Workcation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
