import me from '../img/me.jpg';
import Socials from './Socials';

function Header() {
  return (
    <div className="about">
      <div>
        <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", alignItems: "center" }}>
          <li><img src={me} style={{ width: "80px", borderRadius: "35px" }} alt="Dmitriy Burenok" /></li>
          <li><h1>DMITRIY BURENOK</h1></li>
        </ul>
        <h2>Computer Science and Mathematics @ UBC</h2>
        <Socials />
      </div>
    </div>
  )
}

export default Header
