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
      blurb: "Built and deployed a serverless web-app using AWS architecture. Achieved over 24,000 pageviews and delivered over 8,900 unique queries to UBC students.",
      appUrl: "https://ubcgradebot.com/",
      tech: ["React", "AWS", "Python"],
      repoUrl: "https://github.com/dburenok/ubcgradebot-site",
    },
    {
      name: "Scanbot",
      type: "imagevideo",
      logo: scanbotLogo,
      blurb: "Scanbot is a 360-degree point-cloud scanner, programmed in C++, and powered by the Arduino-ESP32. It connects to a computer using bluetooth and performs a full 3D-scan of the environment. Watch it in action!",
      image: scanbotImage,
      videoUrl: "-Bxh61dTs7g",
      tech: ["C++", "Arduino", "ESP32 Microcontroller", "Java"],
      repoUrl: "https://github.com/dburenok/Scanbot",
    },
    {
      name: "Teletext",
      type: "image",
      logo: teletextLogo,
      blurb: "Teletext is an internal communication system developed for Atlantic Regional Council. The objective was to replace an existing system in order to save on cost and achieve a simplfied user interface.",
      image: teletextImage,
      tech: ["Node.js", "Express.js", "Passport.js", "MongoDB"]
    },
    {
      name: "BeautySpell",
      type: "image",
      logo: beautyspellLogo,
      blurb: "BeautySpell is a GUI spell-checker that uses a custom path-finding algorithm to correct typing errors. It makes extensive use of OOP design principles to handle, save and retrive user-defined data.",
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
