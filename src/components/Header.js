import dp from '../img/dp.png';
import Socials from './Socials';

function Header() {
	return (
		<div className="about">
			<div style={{ display: "flex", listStyle: "none", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
				<img src={dp} style={{ width: "100px", borderRadius: "30px" }} alt="selfie" />
				<h1>dmitriy burenok</h1>
				<h2 style={{ textAlign: "center", display: "block", margin: "0 auto" }}>computer science @ <a href="https://www.cs.ubc.ca">ubc</a></h2><br />
				<Socials />
			</div>
		</div>
	)
}

export default Header
