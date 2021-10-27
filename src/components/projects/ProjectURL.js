function ProjectURL({ project, tiny }) {

  const style = { width: "200px", padding: "10px 25px 10px 25px" };

  if (!tiny) {
    return (
      <div className="project">
        <ul className="projectContainer">
          <li><img style={{ width: "400px", padding: "50px 50px 10px 50px" }} src={project.logo} alt="" /></li>
          <li><p className="blurb" style={{ width: "400px", padding: "10px 50px 10px 50px" }}>{project.blurb}</p></li>
          <li><a href={project.appUrl}><p className="appUrl" style={{ width: "400px", padding: "10px 50px 10px 50px" }}>{project.name}.com</p></a></li>
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
                        {!project.repoUrl &&
                            <li style={style}>
                                <h2 style={{ color: "gray" }}>Private</h2>
                            </li>}
          </ul>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="projectTiny">
        <ul className="projectContainer">
          <li><img style={{ width: "250px", padding: "50px 25px 10px 25px" }} src={project.logo} alt="" /></li>
          <li><p className="blurb" style={{ width: "250px", padding: "10px 25px 10px 25px" }}>{project.blurb}</p></li>
          <li><a href={project.appUrl}><p className="appUrlTiny" style={{ width: "250px", padding: "10px 25px 10px 25px" }}>{project.name}.com</p></a></li>
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
                        {!project.repoUrl &&
                            <li style={style}>
                                <h2 style={{ color: "gray" }}>Private</h2>
                            </li>}
          </ul>
        </ul>
      </div>
    )
  }



}

export default ProjectURL
