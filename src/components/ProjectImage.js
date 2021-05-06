function ProjectImage({ project }) {

  const style = { width: "300px", padding: "10px 25px 10px 25px" }

  return (
    <div className="project">
      <ul className="projectContainer">
        <li><img style={{ width: "600px", padding: "50px 50px 10px 50px" }} src={project.logo} alt="Logo" /></li>
        <li><p className="blurb" style={{ width: "600px", padding: "10px 50px 10px 50px" }}>{project.blurb}</p></li>
        <li><img style={{ width: "600px", padding: "10px 50px 10px 50px" }} src={project.image} alt="" /></li>
        <ul className="bottomContainer">
          <li style={style}>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Technologies Used:</h2>
            {project.tech.map((item) => {
              return <li style={{ fontSize: "24px" }}>{item}</li>
            })}
          </li>
          {project.repoUrl &&
            <li style={style}>
              <a href={project.repoUrl}><h2>GitHub Repo</h2></a>
            </li>}
        </ul>
      </ul>
    </div>
  )
}

export default ProjectImage
