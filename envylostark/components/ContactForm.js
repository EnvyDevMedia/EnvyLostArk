
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
    {
      id: 1,
      name: 'Guerrero',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Artista Marcial',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Artillero',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Maga',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'Asesino',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
   
  
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export const ContactForm = () => {
    const [selected, setSelected] = useState(people[3])
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        reino:"",
        clase:"",
        message:"",

    })

    const {username, email, reino, clase, message} = formData

  return (
      <form className="py-2">
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
                        
                    />
                </div>
            </div>
            <Listbox value={selected}  onChange={setSelected}>
             {({ open }) => (
                 <>
                 <Listbox.Label className="block text-sm font-medium text-gray-700 mt-2">Clase</Listbox.Label>
                     <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-dorado focus:border-dorado sm:text-sm">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
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
                          <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
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
                
              />
            </div>
      
      </form>
      
  )
};
