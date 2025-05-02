import {
  useEffect,
  useState
} from "react";

import {
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";

import {
  SiNotion
} from "react-icons/si";

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="home" className="bg-img">
        <div className="h-screen bg-gradient-to-tr from-slate-300/90 to-slate-950/100">

          <div className={`h-2/4 flex flex-col justify-end items-center transition-transform duration-1000 ${isScrolled ? "-translate-y-6" : undefined}`}>
            <p
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-mono text-yellow-100">
              Joanny Werner
            </p>
            <p
              className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-serif text-teal-400">
              Full-Stack Developer
            </p>
            <p
              className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light italic text-white">
              JavaScript
            </p>
          </div>

          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl h-2/4 flex justify-center items-center text-white gap-3">
            <a
              className={`cursor-pointer hover:duration-300 hover:-translate-y-1 hover:scale-150 transition-transform duration-1000 ${isScrolled ? "scale-125" : undefined}`}
              href='https://www.linkedin.com/in/joannywerner/'
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className={`cursor-pointer hover:duration-300 hover:-translate-y-1 hover:scale-150 transition-transform duration-1000 ${isScrolled ? "scale-125" : undefined}`}
              href='https://github.com/jjwernerm'
              target="_blank"
            >
              <FaGithubSquare />
            </a>
            <a
              className={`cursor-pointer hover:duration-300 hover:-translate-y-1 hover:scale-150 transition-transform duration-1000 ${isScrolled ? "scale-125" : undefined}`}
              href='https://empty-pyramid-6fd.notion.site/ToolKit-de-Desarrollo-14609741837a80f09961eb50ee7bde6d?pvs=4'
              target="_blank"
            >
              <SiNotion />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};