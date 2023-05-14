import React from 'react'
import { MOCK_PROJECTS } from "./MockProjects"

import ProjectList from './ProjectList'

function ProjectsPage() {
  return (
    <>
      <h1 className="title">Projects in Construccion</h1>
      <ProjectList projects={MOCK_PROJECTS} />

    </>
  )
}

export default ProjectsPage