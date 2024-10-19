import * as React from 'react'
import {useEffect, useMemo} from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useGetProjects, useGetProjectView } from '@/endpoints/gubenProdComponents'
import { View } from "@/components/layout/View";
import { PaginationContainer } from "@/components/DataDisplay/PaginationContainer";
import { defaultPaginationProps, usePagination } from "@/hooks/usePagination";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { FeaturedProjectsList } from "@/components/projects/FeaturedProjects";
import {ProjectFilterContainer} from "@/components/projects/ProjectFilterContainer";

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {


  const { pageSize, page, pageCount, total, previousPage, setPageIndex, nextPage, setPageSize, setTotal, setPageCount } = usePagination();

  const [filters, setFilters] = React.useState<[string, string][]>([]);

  const queryParams = useMemo(() => {
    const query: {
      [key: string]: string | number;
    } = {"pagination[pageSize]": pageSize, "pagination[page]": page, populate: "categories"};

    filters.forEach(filter => {
      query[filter[0]] = filter[1];
    });

    return query;
  }, [filters, page, pageSize]);

  const { data: projectViewData, error: projectViewError, isLoading: projectViewIsLoading } = useGetProjectView({ queryParams: { populate: "projects" } });
  const { data: projectsData, error: projectsError, isLoading: projectsIsLoading } = useGetProjects({ queryParams: queryParams });

  useEffect(() => {
    setTotal(projectsData?.meta?.pagination?.total ?? defaultPaginationProps.total);
    setPageCount(projectsData?.meta?.pagination?.pageCount ?? defaultPaginationProps.pageCount);
  }, [projectsData]);

  return (
    <>
      <View title={projectViewData?.data?.attributes?.Title} description={projectViewData?.data?.attributes?.Description} isLoading={projectViewIsLoading}>
        <FeaturedProjectsList projectView={projectViewData?.data?.attributes}/>
        <PaginationContainer page={page} pageSize={pageSize} pageCount={pageCount} total={total} nextPage={nextPage} previousPage={previousPage} setPageIndex={setPageIndex} setPageSize={setPageSize}>
          <ProjectFilterContainer filters={filters} setFilters={setFilters} />
          <ProjectsList projects={projectsData?.data}/>
        </PaginationContainer>
      </View>
    </>
  );
}
