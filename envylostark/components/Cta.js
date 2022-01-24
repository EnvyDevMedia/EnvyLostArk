import Link from 'next/link'
export  function Cta({openContact}) {
    return (
      <div className="bg-zinc-900 ">
        <div className="max-w-7xl  mx-auto text-center pb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-white">¿Preparado para embarcarte en una nueva aventura?</span>
            <span className="block text-dorado">Únete a Envy</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button
                href="#"
                className=" hover:bg-dorado text-white inline-flex items-center justify-center px-8 py-3 border-2 text-base font-medium rounded-md  border-dorado  "
                onClick={openContact}
              >
                Únete
              </button>
            </div>
            <div className="ml-3 inline-flex">
              <Link href="/foro">
                  <a
                    
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200"
                  >
                    Visita nuestro foro
                  </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  