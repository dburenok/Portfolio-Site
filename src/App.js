import scanbotImage from './img/scanbotImage.jpg';
import scanbotLogo from './img/scanbotLogo.png';
import teletextImage from './img/teletextImage.jpg';
import teletextLogo from './img/teletextLogo.png';
import beautyspellImage from './img/beautyspellImage.jpg';
import beautyspellLogo from './img/beautyspellLogo.png';
import ubcgradebotLogo from './img/ubcgradebotLogo.svg';

import './App.css';
import './style.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const projects = [
    {
      name: "UBCGradeBot",
      type: "url",
      logo: ubcgradebotLogo,
      blurb: "Built and deployed a serverless web-app using AWS architecture to deliver instant summaries of historical grade distributions.",
      appUrl: "https://ubcgradebot.com/",
      tech: ["React", "AWS", "Python"],
      repoUrl: "https://github.com/dburenok/ubcgradebot-site",
    },
    {
      name: "Scanbot",
      type: "video",
      logo: scanbotLogo,
      blurb: "Scanbot is a 360-degree point-cloud scanner programmed in C++, and powered by the Arduino-ESP32.",
      image: scanbotImage,
      videoUrl: "-Bxh61dTs7g",
      tech: ["C++", "Arduino", "ESP32 Microcontroller", "Java"],
      repoUrl: "https://github.com/dburenok/Scanbot",
    },
    {
      name: "Teletext",
      type: "image",
      logo: teletextLogo,
      blurb: "Developed a Twilio API-powered Node web-app to provide simple-to-use SMS messaging platform for Atlantic Regional Council.",
      image: teletextImage,
      tech: ["Node.js", "Express.js", "Passport.js", "MongoDB"]
    },
    {
      name: "BeautySpell",
      type: "image",
      logo: beautyspellLogo,
      blurb: "Implemented a custom path-finding algorithm to create a GUI spell-checker in Java.",
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
