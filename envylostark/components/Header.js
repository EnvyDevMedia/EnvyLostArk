import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import logotipo from '../assets/logotipoSVG.svg'

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Objetivos', href: '#' },
  { name: 'Sobre nosotros', href: '#' },
]

export function Header({openContact}) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
          <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative pt-6 pb-10 bg-zinc-900">
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between md:justify-around px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:flex-none">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <Image
                    src={logotipo}
                    height={70}
                    width={70}
                    alt="logotipo"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-[#bfa251] rounded-md p-2 inline-flex items-center justify-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-400 hover:text-white ">
                    {item.name}
                  </a>
                ))}
            </div>
            <div className="hidden md:block text-right">
              <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <button
                  onClick={openContact}
                  className="inline-flex items-center px-4 py-2 border border-yellow-500 text-base font-medium rounded-md text-white hover:bg-gradient-to-r from-[#bfa251] via-[#fff8d2] to-[#bfa251] hover:text-gray-900"
                >
                  Unirme
                </button>
              </span>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-zinc-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-[#bfa251] rounded-md p-2 inline-flex items-center justify-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-gray-900 bg-gradient-to-r from-[#fef0a8] via-[#eac04b] to-[#bfa251]"
                >
                  Contáctanos
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <span className="pb-2 block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-md xl:text-base">
                  Bienvenidos a
              </span>
              <h1 className="text-6xl pb-3 font-extrabold block bg-clip-text text-transparent bg-gradient-to-r from-[#fef0a8] via-[#eac04b] to-[#bfa251]">Envy Club</h1>
              <span className="block text-gray-200 text-5xl font-bold pt-1">Lost Ark Guild</span>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Embárcate con nosotros en una nueva aventura en el mundo de Arkesia. 
                Buscamos jugadores que quieran <strong>disfrutar de una experiencia única</strong>, con la mejor compañía posible.<br></br> <br></br> <strong>¡Te esperamos!</strong>
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <ReactPlayer
                    playing={true}
                    controls={true}
                    muted={true}
                    loop={true}
                    width="100%"
                    height={252}
                    url="https://youtu.be/272hIdT6J84"
                    className="w-full rounded-md"
                  />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}