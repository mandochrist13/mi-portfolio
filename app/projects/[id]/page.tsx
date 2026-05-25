import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import { ProjectPageClient } from "./project-page-client"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const project = projects.find((p) => p.id === id)
    if (!project) return { title: "Project Not Found" }
    
    return {
      title: `${project.title} | DOUTSONA Miriame`,
      description: project.description,
    }
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  
  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return <ProjectPageClient project={project} nextProject={nextProject} />
}
