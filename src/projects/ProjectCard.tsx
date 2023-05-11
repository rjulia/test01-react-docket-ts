import React from 'react'
import { Project } from './Project';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}
interface ProjectCardProps {
  project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleEditClick = (projectBeingEdited: Project) => {
    console.log(projectBeingEdited);
  };
  interface Person {
    name: string;
    age: number;
  }
  const array: Person[] = [
    { name: 'ramon', age: 12 },
    { name: 'genki', age: 11 },
  ]

  console.log(array);
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button onClick={() => { handleEditClick(project) }} className="bordered">
          <span className="icon-edit"></span>
          Edit Yeah!!!! Hey
        </button>
      </section>
    </div>
  )
}

export default ProjectCard