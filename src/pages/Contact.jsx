import {
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";

import {
  SiNotion
} from "react-icons/si";

import
FormContact
  from "../components/FormContact.jsx";

import
Footer
  from "../components/Footer.jsx";

export default function Contact() {

  return (
    <>
      <div id='contact' className='h-min pt-16 bg-sky-100'>
        <p className="text-2xl font-extrabold font-serif md:text-5xl text-teal-400 text-center">
          Contacto
        </p>
        <p className="text-center text-zinc-700 my-2 mx-6">
          Por favor contácteme a través de este formulario y le responderé dentro de las 24 horas.
        </p>
        <p className="text-center text-zinc-700 mt-4">
          Encuéntrame en:
        </p>
        <div className="flex justify-center text-slate-700 mt-4 text-2xl gap-3 md:text-2xl">
          <a
            className='cursor-pointer hover:duration-300 hover:-translate-y-1 hover:scale-150 transition-transform duration-1000'
            href='https://www.linkedin.com/in/joannywerner/'
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className='cursor-pointer hover:duration-300 hover:-translate-y-1 hover:scale-150 transition-transform duration-1000'
            href='https://github.com/jjwernerm'
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className='cursor-pointer hover:duration-300 hover:-translate-y-1 hover:scale-150 transition-transform duration-1000'
            href='https://empty-pyramid-6fd.notion.site/ToolKit-de-Desarrollo-14609741837a80f09961eb50ee7bde6d?pvs=4'
            target="_blank"
          >
            <SiNotion />
          </a>
        </div>

        <FormContact />

        <Footer />

      </div>
    </>
  )
};