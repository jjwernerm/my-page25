import {
  useState
} from 'react';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle  
} from '@headlessui/react';

import {
  paragraphs
} from '../data/DataJoa.jsx';

export default function ModalJoa({ idModal, onClose }) {

  const [open, setOpen] = useState(true)

  const handleOnClose = () => {
    setOpen(false); // Oculta el modal.
    onClose(); // Llama a la función `onClose` para realizar cualquier acción adicional al cerrar el modal.
  };

  return (
    <Dialog open={open} onClose={handleOnClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {paragraphs.map((paragraph) =>
                  paragraph.id === idModal && ( // Mostrar solo si el id coincide con idModal
                    <div key={paragraph.id}>
                      <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-500 sm:mx-0 sm:size-10">
                        <p className='text-white'>{paragraph.icon}</p>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                          {paragraph.title}
                        </DialogTitle>
                        <div className="mt-2">
                          <div className="text-sm text-gray-500">
                            <p className="text-zinc-500 my-5">{paragraph.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
};