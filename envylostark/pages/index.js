import { Header, Objetivos, About, Footer, Modal, ContactForm } from "../components"
import {useState} from 'react'


export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)

  const openCloseModal = () => setShowModal((prev)=> !prev)

  const openContact = () => {
    setTitleModal("Contacta con nosotros")
    setContentModal(<ContactForm/>)
    openCloseModal()
  }

  return (
    <>
      <Header openContact={openContact}/>
      <Objetivos/>
      <About/>
      <Footer/>
      <Modal show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                content={contentModal}
            />
    </>
  )
}
