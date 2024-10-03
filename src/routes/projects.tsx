import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetHomeView, useGetProjects, useGetProjectView} from '@/endpoints/gubenProdComponents'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  const {data, error, isLoading} = useGetProjectView({queryParams: {}});
  const {} = useGetProjects({ queryParams: {} });

  return <div className="">Projects</div>
}
