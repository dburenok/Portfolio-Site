import me from '../img/me.jpg';
import Socials from './Socials';

function Header() {
	return (
		<div className="about">
			<div>
				<ul style={{ display: "flex", listStyle: "none", justifyContent: "center", alignItems: "center" }}>
					<li><img src={me} style={{ width: "80px", borderRadius: "100%", boxShadow: "3px 5px 10px #b7b7b7" }} alt="Dmitriy Burenok" /></li>
					<li><h1>Dmitriy Burenok</h1></li>
				</ul>
				<h2 style={{ textAlign: "center", display: "block", margin: "0 auto" }}>CS @ <a href="https://www.cs.ubc.ca">UBC</a></h2><br />
				<Socials />
			</div>
		</div>
	)
}

export default Header
