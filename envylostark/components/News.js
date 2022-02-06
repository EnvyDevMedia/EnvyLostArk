const posts = [
    {
        title: 'DETALLES DEL LANZAMIENTO',
        href: 'https://www.playlostark.com/es-es/news/articles/launch-details',
        category: { name: '', href: '#' },
        description:
            'Héroes de Arkesia: El lanzamiento ya casi está aquí y queremos que conozcáis todos los detalles necesarios para que os preparéis para vuestras aventuras en Arkesia.',
        date: 'Jue 27, 2022',
        datetime: '2022-01-27',
        imageUrl:
            'https://images.ctfassets.net/umhrp0op95v1/51WBVPKNBEOCgkEHW7HWJE/e45ca1aa357034f21ba5f0de3f619df0/LA_Article_02_580x330.jpg',
        readingTime: '6 min',
        author: {
            name: 'Lost Ark oficial',
            href: 'https://www.playlostark.com/es-es/news/articles/launch-details',
            imageUrl:
                'https://images.ctfassets.net/umhrp0op95v1/51WBVPKNBEOCgkEHW7HWJE/e45ca1aa357034f21ba5f0de3f619df0/LA_Article_02_580x330.jpg',
        },
    },
    {
        title: 'ACTUALIZACIÓN DEL EQUIPO DE ENERO',
        href: 'https://www.playlostark.com/es-es/news/articles/january-2022-team-update',
        category: { name: '', href: '#' },
        description:
            'Héroes de Arkesia: Ya nos estamos preparando para el lanzamiento del mes que viene, así que en la actualización de enero queremos hablaros de algunas novedades y cambios importantes para los que hemos colaborado con Smilegate RPG según los comentarios de los jugadores de la beta y responder preguntas que hemos visto en los foros, en redes sociales y en nuestro servidor de Discord.',
        date: 'Mie 26, 2022',
        datetime: '2022-01-26',
        imageUrl:
            'https://images.ctfassets.net/umhrp0op95v1/3WMmgUI0Gn8n6ByKtEIW5K/5ab4c708949590a6731f4cc0c30347d6/LA_Article_01_580x330.jpg',
        readingTime: '4 min',
        author: {
            name: 'Lost Ark oficial',
            href: 'https://www.playlostark.com/es-es/news/articles/january-2022-team-update',
            imageUrl:
                'https://images.ctfassets.net/umhrp0op95v1/3WMmgUI0Gn8n6ByKtEIW5K/5ab4c708949590a6731f4cc0c30347d6/LA_Article_01_580x330.jpg',
        },
    },
    {
        title: 'GUÍA PARA NUEVOS JUGADORES',
        href: 'https://www.playlostark.com/es-es/news/articles/new-player-guide',
        category: { name: '', href: '#' },
        description:
            'Héroes de Arkesia: Tenemos a vuestra disposición un manual con toda la información de Lost Ark para los jugadores que quieren ponerse al día antes del 11 de febrero, fecha de lanzamiento del juego. Podéis descubrir la historia y las regiones del vasto mundo de Arkesia, repasar las clases jugables únicas y encontrar enlaces a otros artículos informativos que hemos publicado de cara al lanzamiento.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.ctfassets.net/umhrp0op95v1/NemIutF1S24Q83jwZ7iOq/4ccde618870706636b6a6cb79d647651/LA_Blog_SS_07_580.jpg',
        readingTime: '11 min',
        author: {
            name: 'Lost Ark oficial',
            href: 'https://www.playlostark.com/es-es/news/articles/new-player-guide',
            imageUrl:
                'https://images.ctfassets.net/umhrp0op95v1/NemIutF1S24Q83jwZ7iOq/4ccde618870706636b6a6cb79d647651/LA_Blog_SS_07_580.jpg',
        },
    },
]

export function News() {
    return (
        <div id="noticias" className="relative bg-zinc-900 pt-16 pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-zinc-900 h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-medium text-gray-200 sm:text-4xl">Ultimas noticias</h2>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col  rounded-lg shadow-lg overflow-hidden  cursor-pointer">
                            <div className="flex-shrink-0  ">
                                <img className="h-48 w-full  object-cover " src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-zinc-800 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-200">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-300">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href={post.author.href}>
                                            <span className="sr-only">{post.author.name}</span>
                                            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-200">
                                            <a href={post.author.href} className="hover:underline">
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{post.readingTime} read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
