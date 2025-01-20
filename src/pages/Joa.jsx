// BuscarEliminar.jsx
import {
  useState
} from 'react';

import {
  paragraphs
} from '../data/DataJoa.jsx';

import
ModalJoa
  from '../components/ModalJoa.jsx';

export default function Joa() {

  const [modal, setModal] = useState(false); // Estado para controlar la visibilidad del modal.
  const [idModal, setIdModal] = useState(0); // Estado para enviar id del paragraphs como prop.

  const handleOpenModal = (id) => {

    setIdModal(id)

    // Función para abrir el modal.
    setModal(true); // Actualiza el estado para mostrar el modal.

  };

  const handleCloseModal = () => {

    // Función para cerrar el modal.
    setModal(false); // Actualiza el estado para ocultar el modal.

  };

  return (
    <>
      <div id='joa' className='h-min pt-16 bg-zinc-200 p-4 pb-16'>

        <div className="text-xl font-extrabold font-serif md:text-3xl text-teal-500">
          <p>¡Hola,</p>
          <p>soy Joanny Werner!</p>
        </div>

        {paragraphs.map((paragraph, index) =>
          index === 0 && ( // Mostrar solo si el índice es 0
            <div key={paragraph.id}>
              <p className="text-zinc-500 my-5">{paragraph.text}</p>
            </div>
          )
        )}

        <button className="grid grid-cols-2 gap-4">
          {paragraphs.slice(1).map((paragraph) => (
            <div
              key={paragraph.id}
              onClick={() => handleOpenModal(paragraph.id)} // Pasamos el id a la función
            >
              <div className="flex flex-col items-center rounded-full outline outline-offset-4 outline-zinc-300 text-white p-4 bg-teal-500">
                <p>{paragraph.title}</p>
                <p className="text-lg">{paragraph.icon}</p>
                <p className="text-xs mt-2">Leer más {'>'}</p>
              </div>
            </div>
          ))}
        </button>

        <div>
          {modal && <ModalJoa idModal={idModal} onClose={handleCloseModal} />}
          {/* Muestra el modal si `modal` es true */}
        </div>

      </div>
    </>
  )
};