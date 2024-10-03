import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";
import {usePagination} from "@/hooks/usePagination";
import {EventsList} from "@/components/events/EventsList";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    const {page, pageCount, total, pageSize, nextPage, previousPage, setPageIndex, setPageSize} = usePagination();
    const {data: eventsData, error: eventsError, isLoading: eventsIsloading} = useGetEvents({queryParams: {"pagination[pageSize]": pageSize, "pagination[page]": page}}, {});
    const {data: eventViewData, error: eventViewErrors, isLoading: eventViewIsLoading} = useGetEventView({queryParams: {}});

    return (
        <>
            <View title={eventViewData?.data?.attributes?.Title} description={eventViewData?.data?.attributes?.Description} isLoading={eventViewIsLoading}>
                <PaginationContainer nextPage={nextPage} previousPage={previousPage} setPageIndex={setPageIndex} setPageSize={setPageSize} total={total} pageCount={pageCount} pageSize={pageSize} page={page}>
                    <EventsList events={eventsData?.data} />
                </PaginationContainer>
            </View>
        </>
    );
}
