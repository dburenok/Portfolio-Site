import ProjectImage from './projects/ProjectImage';
import ProjectURL from './projects/ProjectURL';
import ProjectVideo from './projects/ProjectVideo';
import MediaQuery from 'react-responsive'

function Projects({ projects }) {

  return (
    <>
      <MediaQuery maxWidth={960} >
        <ul className="container">
          {projects.map((project) => {
            if (project.type === "image") {
              return <li><ProjectImage project={project} tiny={true} /></li>
            } else if (project.type === "url") {
              return <li><ProjectURL project={project} tiny={true} /></li>
            } else {
              return <li><ProjectVideo project={project} tiny={true} /></li>
            }
          })}
        </ul>
      </MediaQuery>
      <MediaQuery minWidth={961} >
        <ul className="container">
          {projects.map((project) => {
            if (project.type === "image") {
              return <li><ProjectImage project={project} /></li>
            } else if (project.type === "url") {
              return <li><ProjectURL project={project} /></li>
            } else {
              return <li><ProjectVideo project={project} /></li>
            }
          })}
        </ul>
      </MediaQuery>

    </>
  )
}

export default Projects
