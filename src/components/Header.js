import me from '../img/me.jpg';
import Socials from './Socials';

function Header() {
  return (
    <div className="about">
      <div>
        <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", alignItems: "center" }}>
          <li><img src={me} style={{ width: "80px", borderRadius: "100%" }} alt="Dmitriy Burenok" /></li>
          <li><h1>Dmitriy Burenok</h1></li>
        </ul>
        <h2 style={{ textAlign: "center", display: "block", margin: "0 auto" }}>&#123; role: "Development Support at <a href="https://www.keywordsstudios.com/">Keywords Studios</a>",<br />major: "UBC Computer Science" &#125;</h2><br />
        <Socials />
      </div>
    </div>
  )
}

export default Header
