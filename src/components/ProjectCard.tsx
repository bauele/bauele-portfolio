import "./ProjectCard.css";

interface Props {
  name: string;
  imagePath: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

export const ProjectCard = ({
  name,
  description,
  imagePath,
  demoLink,
  githubLink,
}: Props) => {
  return (
    <div className="project-card">
      <div className="project-container">
        <div className="project-heading">
          <h3>{name}</h3>
        </div>
        <div className="project-image-container">
          <img className="project-image" src={imagePath} />
        </div>
        <div className="project-description">{description}</div>
        <div className="project-buttons flex-center margin-top-md">
          <a href={demoLink} className="button btn-style-1 text-color-1">
            Demo
          </a>
          <a href={githubLink} className="button btn-style-2 text-color-1">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
