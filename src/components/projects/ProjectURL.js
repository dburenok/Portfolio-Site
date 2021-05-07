function ProjectURL({ project }) {

  const style = { width: "200px", padding: "10px 25px 10px 25px" };

  return (
    <div className="project">
      <ul className="projectContainer">
        <li><img style={{ width: "400px", padding: "50px 50px 10px 50px" }} src={project.logo} alt="" /></li>
        <li><p className="blurb" style={{ width: "400px", padding: "10px 50px 10px 50px" }}>{project.blurb}</p></li>
        <li><a href={project.appUrl}><p className="appUrl" style={{ width: "400px", padding: "10px 50px 10px 50px" }}>UBCGradeBot.com</p></a></li>
        <ul className="bottomContainer">
          <li style={style}>
            <h2 className="techHeader" >Tech Stack:</h2>
            {project.tech.map((item) => {
              return <li className="tech">{item}</li>
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

export default ProjectURL
