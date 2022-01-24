import React from 'react'
import Head from "next/head"
export  function Seo(props) {
    const { title, description } = props
    return (
        <Head>
            <title>{title }</title>
            <meta property="description" content={description}/>
        </Head>
    )
}


Seo.defaultProps={
    title:"Envy - Tu comunidad de videojuegos",
    description:"La mejor comunidad para disfrutar de tus videojuegos preferidos"
}
