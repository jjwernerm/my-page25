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
              className="text-4xl font-black font-mono md:text-6xl text-yellow-100">
              Joanny Werner
            </p>
            <p
              className="text-xl font-extrabold font-serif md:text-3xl text-teal-400">
              Full-Stack Developer
            </p>
            <p
              className="text-lg font-light italic md:text-2xl text-white">
              JavaScript
            </p>
          </div>

          <div className={`h-2/4 flex justify-center items-center text-white text-3xl gap-3 md:text-2xl transition-transform duration-1000 ${isScrolled ? "scale-125" : undefined}`}>
            <a
              className="cursor-pointer duration-300 hover:-translate-y-1 hover:scale-150"
              href='https://www.linkedin.com/in/joannywerner/'
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="cursor-pointer duration-300 hover:-translate-y-1 hover:scale-150"
              href='https://github.com/jjwernerm'
              target="_blank"
            >
              <FaGithubSquare />
            </a>
            <a
              className="cursor-pointer duration-300 hover:-translate-y-1 hover:scale-150"
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