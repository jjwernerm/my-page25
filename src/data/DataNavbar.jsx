import {
  FaUser,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import {
  MdHome,
  MdBusinessCenter,
  MdSchool,
  MdEmail
} from "react-icons/md";

import {
  SiReaddotcv,
  SiNotion
} from "react-icons/si";

export const navigation = [
  { name: 'Inicio', href: '#home', icon: <MdHome /> },
  { name: 'Joa', href: '#joa', icon: <FaUser /> },
  { name: 'Challenges', href: '#challenges', icon: <MdSchool /> },
  { name: 'Portafolio', href: '#portfolio', icon: <MdBusinessCenter /> },
  { name: 'Contacto', href: '#contact', icon: <MdEmail /> },
];

export const user = {
  name: 'Joanny Werner',
  email: 'joannywerner@gmail.com',
  imageUrl: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/my-photo.png',
};

export const userNavigation = [
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/joannywerner/', icon: <FaLinkedin /> },
  { name: 'Github', href: 'https://github.com/jjwernerm', icon: <FaGithub /> },
  { name: 'Notion', href: 'https://empty-pyramid-6fd.notion.site/ToolKit-de-Desarrollo-14609741837a80f09961eb50ee7bde6d?pvs=4', icon: <SiNotion /> },
  { name: 'Descargar CV', href: 'https://drive.google.com/file/d/1D6LUxy6Jf_bU7ZhK62MqDn_HrATOVz3m/view?usp=sharing', icon: <SiReaddotcv /> },
];