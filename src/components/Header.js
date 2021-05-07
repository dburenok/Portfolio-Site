import me from '../img/me.jpg';
import Socials from './Socials';

function Header() {
  return (
    <div class="about">
      <div>
        <ul style={{ display: "flex", listStyle: "none", justifyContent: "center" }}>
          <li><img src={me} style={{ width: "90px", borderRadius: "35px" }} alt="Dmitriy Burenok" /></li>
          <li><h1>DMITRIY BURENOK</h1></li>
        </ul>
        <h2>Computer Science and Mathematics Undergrad @ UBC</h2>
        <Socials />
      </div>
    </div>
  )
}

export default Header
