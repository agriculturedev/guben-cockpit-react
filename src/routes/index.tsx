import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {useGetHomeView, useGetProjects, useGetProjectView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";
import {usePagination} from "@/hooks/usePagination";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    const {data: homeViewData, error: homeViewError, isLoading: homeViewIsLoading} = useGetHomeView({queryParams: {}});

    return (
        <>
            <View title={homeViewData?.data?.attributes?.title} description={homeViewData?.data?.attributes?.description} isLoading={homeViewIsLoading}>

            </View>
        </>
    );
}
