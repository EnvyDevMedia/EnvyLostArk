import emailjs from "emailjs-com";
import { Fragment, useState, useRef } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import mago from '../assets/mageicon.svg'
import warrior from '../assets/warrioicon.svg'
import hunter from '../assets/huntericon.svg'
import assasin from '../assets/assasinicon.svg'
import artirst from '../assets/artirsticon.svg'

const people = [
  {
    id: 1,
    name: 'Guerrero',
    avatar:
      warrior,
  },
  {
    id: 2,
    name: 'Artista Marcial',
    avatar:
      artirst,
  },
  {
    id: 3,
    name: 'Artillero',
    avatar:
      hunter,
  },
  {
    id: 4,
    name: 'Maga',
    avatar:
      mago,
  },
  {
    id: 5,
    name: 'Asesino',
    avatar:
      assasin,
  },


]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const ContactForm = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    reino: "",
    clase: "",
    message: "",

  })
  const form = useRef();

  const { username, email, reino, message, clase } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && email && reino && message) {
      emailjs
        .sendForm(
          "service_zzvkv1u",
          "template_8tj9eih",
          form.current,
          "user_6oH8Mc4RUx1BJCp999Gqq"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormData({
        username: "",
        email: "",
        reino: "",
        message: ""
      })
    }
  }

  return (
    <form ref={form} className="py-2" onSubmit={handleSubmit}>
      <div className="mt-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre del personaje *
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="username"
            autoFocus
            className="shadow-sm focus:ring-dorado focus:border-dorado block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Nombre del personaje..."
            value={username}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            autoFocus
            className="shadow-sm focus:ring-dorado focus:border-dorado block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="info@example.com...."
            value={email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="reino"
          className="block text-sm font-medium text-gray-700"
        >
          Reino
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="reino"
            autoFocus
            className="shadow-sm focus:ring-dorado focus:border-dorado block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Servidor..."
            value={reino}
            onChange={handleChange}
          />
        </div>
      </div>
      <Listbox value={clase} onChange={(data) => setFormData({ ...formData, clase: data })}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-2">Clase</Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-dorado focus:border-dorado sm:text-sm">
                {clase? <>
                <span className="flex items-center">
                    <Image src={clase.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                  <span className="ml-3 block truncate">{clase.name}</span> 
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span> </> : "Selecciona clase" } 
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-dorado' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <Image src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-dorado',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      <div className="relative mb-4 mt-2">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-700 font-medium "
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-dorado focus:ring-2 focus:ring-dorado h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          value={message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="bg-black text-white font-semibold w-full  rounded hover:bg-zinc-800 py-2 px-5">Enviar formulario</button>

    </form>

  )
};
