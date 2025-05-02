import {
  useState
} from 'react';

export default function FormContact() {

  return (
    <form action="" method="" className="mx-auto mt-4 max-w-xl sm:mt-20 px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

        <input
          id="name"
          name="name"
          type="text"
          placeholder='Nombre*'
          className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-zinc-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400"
        />

        <div className="sm:col-span-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Email*'
            className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-zinc-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400"
          />
        </div>

        <div className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder='Escribe tu mensaje aquí*'
            className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-zinc-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400"
            defaultValue={''}
          />
        </div>

      </div>

      <div className="my-4 flex justify-center">
        <button
          type="submit"
          className="block w-28 rounded-full bg-teal-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};