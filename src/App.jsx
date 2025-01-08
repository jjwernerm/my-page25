import './styles.css';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Joa from './pages/Joa.jsx';
import Challenges from './pages/Challenges.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Joa />
      <Challenges />
      <Portfolio />
      <Contact />
    </>
  )
};