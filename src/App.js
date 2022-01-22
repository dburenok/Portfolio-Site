import scanbotImage from './img/scanbotImage.jpg';
import scanbotLogo from './img/scanbotLogo.png';
import teletextImage from './img/teletextImage.png';
import teletextLogo from './img/teletextLogo.png';
import beautyspellImage from './img/beautyspellImage.png';
import beautyspellLogo from './img/beautyspellLogo.png';
import ubcgradebotLogo from './img/ubcgradebotLogo.svg';
import activemeetubcLogo from './img/activemeetubcLogo.svg';

import './App.css';
import './style.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const projects = [
    {
      name: "ubcgradebot",
      type: "url",
      logo: ubcgradebotLogo,
      blurb: "Get instant summaries of grade distributions of past UBC courses.",
      appUrl: "https://ubcgradebot.com/",
      tech: ["React", "AWS", "Python"],
      repoUrl: "https://github.com/dburenok/ubcgradebot-site",
    },
    {
      name: "Scanbot",
      type: "video",
      logo: scanbotLogo,
      blurb: "Homemade 360-degree point-cloud scanner programmed with C++.",
      image: scanbotImage,
      videoUrl: "ncSoNg-iaqI",
      tech: ["C++", "Java", "Arduino ESP32"],
      repoUrl: "https://github.com/dburenok/Scanbot",
    },
    {
      name: "Teletext",
      type: "image",
      logo: teletextLogo,
      blurb: "Twilio API-powered SMS messaging platform for a Canadian non-profit.",
      image: teletextImage,
      tech: ["Node", "Express", "Twilio API", "MongoDB"]
    },
    {
      name: "BeautySpell",
      type: "image",
      logo: beautyspellLogo,
      blurb: "Pathfinding Java spellchecker.",
      image: beautyspellImage,
      tech: ["Java", "JUnit 5"],
      repoUrl: "https://github.com/dburenok/BeautySpell"
    },
  ]

  return (
    <div className="App">
      <Header />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
