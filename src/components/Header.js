import me from '../img/me.jpg';

function Header() {
  return (
    <div class="about">
      <img src={me} style={{ width: "150px", borderRadius: "15px" }} alt="Dmitriy Burenok"/>
      <div>
        <h1>Dmitriy Burenok</h1>
        <h2>Major in Computer Science and Minor in Mathematics @ UBC</h2>
        <p>Welcome to my page! Below is a selection of my personal projects. Email: <a href="mailto:dmitriyburenok@gmail.com">dmitriyburenok@gmail.com</a> Cell: <a href="tel:778-751-5950">778-751-5950</a></p>
      </div>
    </div>
  )
}

export default Header
