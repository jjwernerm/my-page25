import {
  repositories
} from "../data/DataRepositories.jsx";

export default function MyRepositories({ selectedTech }) {

  // Filtramos los repositorios según la tecnología seleccionada
  const filteredRepositories = selectedTech === 0
    ? repositories  // Si se selecciona "Todas las tecnologías", mostramos todos
    : repositories.filter(repo => repo.techId === selectedTech); // Filtrar por techId

  return (
    <div className="mt-8 text-center text-white">
      {filteredRepositories.length === 0 ? (
        <p>No hay repositorios disponibles para esta tecnología.</p>
      ) : (
        filteredRepositories
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((repository, index) => (
            <div key={index}>

              <div className='border-4 border-double rounded-md mt-6 pb-4 bg-slate-800'>
                <a
                  href={repository.web}
                  target="_blank">
                  <img
                    className='rounded-t-sm'
                    href={repository.web}
                    alt='Website image'
                    src={repository.img}
                  />
                </a>

                <p className="text-yellow-200 font-semibold mt-4">{repository.title}</p>

                <p className=""> Frontend {' '}
                  <a
                    href={repository.github}
                    target="_blank"
                    className="font-semibold underline underline-offset-2">
                    Github
                  </a>
                </p>

                <p className={repository.techId != 3 ? 'hidden' : 'block'}> Backend {' '}
                  <a
                    href={repository.backgithub}
                    target="_blank"
                    className="font-semibold underline underline-offset-2">
                    Github
                  </a>
                </p>

                <p className=""> Ver sitio{' '}
                  <a
                    href={repository.web}
                    target="_blank"
                    className="font-semibold underline underline-offset-2">
                    Web
                  </a>
                </p>

                <p className="flex justify-center gap-2 text-xl mt-2">
                  {repository.FaHtml5} {repository.faCss3Alt} {repository.faJsSquare} {repository.faReact} {repository.faNode}
                </p>
              </div>

            </div>
          )))}
    </div>
  );
};