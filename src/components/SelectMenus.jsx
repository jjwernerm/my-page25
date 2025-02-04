import {
  useState
} from 'react';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';

import {
  ChevronUpDownIcon
} from '@heroicons/react/16/solid';

const technologySelection = [
  {
    id: 0,
    name: 'Todas las Tecnologías',
    logo: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page25/logo25-joa-navbar.png',
  },
  {
    id: 1,
    name: 'JavaScript',
    logo: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-javascript.png',
  },
  {
    id: 2,
    name: 'ReactJS',
    logo: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',
  },
  {
    id: 3,
    name: 'NodeJS',
    logo: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-nodejs.png',
  },
]

export default function SelectMenus({ setSelectedTech }) {
  const [selected, setSelected] = useState(technologySelection[0])

  return (
    <Listbox
      value={selected}
      onChange={(tech) => {
        setSelected(tech);
        setSelectedTech(tech.id); // Actualiza el estado en Challenges.jsx
      }}
    >
      <div className="relative mt-8">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img alt="" src={selected.logo} className="size-5 shrink-0 rounded-full" />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {technologySelection.map((tech) => (
            <ListboxOption
              key={tech.id}
              value={tech}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img alt="" src={tech.logo} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{tech.name}</span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};