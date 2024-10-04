import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetHomeView, useGetProjects, useGetProjectView} from '@/endpoints/gubenProdComponents'
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";
import {usePagination} from "@/hooks/usePagination";

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
    const {pageSize, page, pageCount, total, previousPage, setPageIndex, nextPage, setPageSize} = usePagination();
  const {data: projectViewData, error: projectViewError, isLoading: projectViewIsLoading} = useGetProjectView({queryParams: {}});
  const {data: projectsData, error: projectsError, isLoading: projectsIsLoading} = useGetProjects({ queryParams: {"pagination[pageSize]": pageSize, "pagination[page]": page} });

  return (
      <>
        <View title={projectViewData?.data?.attributes?.Title} description={projectViewData?.data?.attributes?.Description} isLoading={projectViewIsLoading}>
          <PaginationContainer page={page} pageSize={pageSize} pageCount={pageCount} total={total} nextPage={nextPage} previousPage={previousPage} setPageIndex={setPageIndex}  setPageSize={setPageSize}/>
        </View>
      </>
  );
}
