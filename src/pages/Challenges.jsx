import {
  useState
} from "react";

import
SelectMenus
  from '../components/SelectMenus.jsx';

import
MyRepositories
  from '../components/MyRepositories.jsx';

export default function Challenges() {

  const [selectedTech, setSelectedTech] = useState(0); // ID de la tecnología seleccionada

  return (
    <>
      <div id='challenges' className='h-min pt-16 bg-zinc-700 p-4'>

        <p
          className="text-2xl text-center font-black font-mono md:text-6xl text-yellow-200">
          Challenges
        </p>

        <p
          className="text-center text-white mt-4">
          Aquí encontrarás una colección de repositorios, proyectos y prácticas que he desarrollado para mejorar mis habilidades en diversas tecnologías.
        </p>

        {/* Pasamos la función para actualizar la selección */}
        <SelectMenus setSelectedTech={setSelectedTech} />

        {/* Pasamos la tecnología seleccionada a MyRepositories */}
        <MyRepositories selectedTech={selectedTech} />

      </div>
    </>
  )
};