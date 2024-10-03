import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetHomeView, useGetProjects, useGetProjectView} from '@/endpoints/gubenProdComponents'
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  const {data: projectViewData, error: projectViewError, isLoading: projectViewIsLoading} = useGetProjectView({queryParams: {}});
  const {data: projectsData, error: projectsError, isLoading: projectsIsLoading} = useGetProjects({ queryParams: {} });

  return (
      <>
        <View title={projectViewData?.data?.attributes?.Title} description={projectViewData?.data?.attributes?.Description} isLoading={projectViewIsLoading}>
          <PaginationContainer />
        </View>
      </>
  );
}
