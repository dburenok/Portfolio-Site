import ProjectImage from './ProjectImage';
import ProjectImageVideo from './ProjectImageVideo';
import ProjectURL from './ProjectURL';
import ProjectVideo from './ProjectVideo';

function Projects({ projects }) {
  return (
    <ul className="container">
      {projects.map((project) => {
        if (project.type === "image") {
          return <li><ProjectImage project={project} /></li>
        } else if (project.type === "url") {
          return <li><ProjectURL project={project} /></li>
        } else if (project.type === "imagevideo") {
          return <li><ProjectImageVideo project={project} /></li>
        } else {
          return <li><ProjectVideo project={project} /></li>
        }
      })}
    </ul>
  )
}

export default Projects